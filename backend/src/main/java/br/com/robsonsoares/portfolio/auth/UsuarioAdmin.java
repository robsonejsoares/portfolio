package br.com.robsonsoares.portfolio.auth;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Table(name = "usuarios_admin")
@Getter @Setter @NoArgsConstructor
public class UsuarioAdmin {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, length = 120) private String nome;
    @Column(nullable = false, unique = true, length = 254) private String email;
    @Column(name = "senha_hash", nullable = false) private String senhaHash;
    @Column(nullable = false) private boolean ativo = true;
}
