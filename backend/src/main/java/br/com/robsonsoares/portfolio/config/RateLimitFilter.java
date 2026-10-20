package br.com.robsonsoares.portfolio.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Instant;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class RateLimitFilter extends OncePerRequestFilter {
    private static final int MAX_REQUESTS = 10;
    private static final long WINDOW_SECONDS = 60;
    private final ConcurrentHashMap<String, Window> windows = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        if (request.getRequestURI().equals("/api/auth/login") || request.getRequestURI().equals("/api/contato")) {
            String key = request.getRemoteAddr() + ":" + request.getRequestURI();
            Window window = windows.compute(key, (ignored, current) -> current == null || current.expired() ? new Window() : current);
            if (window.count.incrementAndGet() > MAX_REQUESTS) {
                response.setStatus(429);
                response.setHeader("Retry-After", String.valueOf(WINDOW_SECONDS));
                response.setContentType("application/json");
                response.getWriter().write("{\"error\":\"Muitas tentativas. Tente novamente em instantes.\"}");
                return;
            }
        }
        chain.doFilter(request, response);
    }

    private static final class Window {
        private final long startedAt = Instant.now().getEpochSecond();
        private final AtomicInteger count = new AtomicInteger();
        private boolean expired() { return Instant.now().getEpochSecond() - startedAt >= WINDOW_SECONDS; }
    }
}
