package br.com.robsonsoares.portfolio.config;

import br.com.robsonsoares.portfolio.auth.AuthController.UnauthorizedException;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import java.time.Instant;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class) ResponseEntity<?> notFound(IllegalArgumentException exception) { return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body(exception.getMessage())); }
    @ExceptionHandler(UnauthorizedException.class) ResponseEntity<?> unauthorized(UnauthorizedException exception) { return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(body(exception.getMessage())); }
    @ExceptionHandler(MethodArgumentNotValidException.class) ResponseEntity<?> validation(MethodArgumentNotValidException exception) {
        String message = exception.getBindingResult().getFieldErrors().stream()
            .map(error -> error.getField() + ": " + error.getDefaultMessage())
            .collect(Collectors.joining("; "));
        return ResponseEntity.badRequest().body(body(message));
    }
    @ExceptionHandler(java.util.NoSuchElementException.class) ResponseEntity<?> missing(java.util.NoSuchElementException exception) { return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body("Registro não encontrado.")); }
    @ExceptionHandler(Exception.class) ResponseEntity<?> generic(Exception exception) { return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body("Ocorreu um erro interno no servidor.")); }
    private Map<String, Object> body(String message) { return Map.of("timestamp", Instant.now(), "message", message); }
}
