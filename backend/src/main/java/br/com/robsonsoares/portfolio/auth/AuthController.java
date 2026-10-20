package br.com.robsonsoares.portfolio.auth;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/auth")
public class AuthController {
    private final UsuarioAdminRepository repository; private final PasswordEncoder encoder; private final JwtService jwtService;
    public AuthController(UsuarioAdminRepository repository, PasswordEncoder encoder, JwtService jwtService) { this.repository = repository; this.encoder = encoder; this.jwtService = jwtService; }
    @PostMapping("/login") public LoginResponse login(@Valid @RequestBody LoginRequest request) { UsuarioAdmin user = repository.findByEmailIgnoreCaseAndAtivoTrue(request.email()).filter(item -> encoder.matches(request.senha(), item.getSenhaHash())).orElseThrow(() -> new UnauthorizedException("E-mail ou senha inválidos.")); return new LoginResponse(jwtService.generate(user.getEmail()), user.getNome()); }
    public record LoginRequest(@Email @NotBlank String email, @NotBlank String senha) {}
    public record LoginResponse(String token, String nome) {}
    @ResponseStatus(HttpStatus.UNAUTHORIZED) public static class UnauthorizedException extends RuntimeException { public UnauthorizedException(String message) { super(message); } }
}
