package br.com.robsonsoares.portfolio.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UsuarioAdminRepository repository;
    public JwtAuthenticationFilter(JwtService jwtService, UsuarioAdminRepository repository) { this.jwtService = jwtService; this.repository = repository; }
    @Override protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) { String token = header.substring(7); if (jwtService.isValid(token)) { String email = jwtService.extractEmail(token); if (repository.findByEmailIgnoreCaseAndAtivoTrue(email).isPresent()) SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(email, null, List.of(new SimpleGrantedAuthority("ROLE_ADMIN")))); } }
        chain.doFilter(request, response);
    }
}
