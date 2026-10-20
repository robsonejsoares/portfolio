package br.com.robsonsoares.portfolio.project;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "projetos")
@Getter @Setter @NoArgsConstructor
public class Projeto {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 160) private String titulo;
    @Column(nullable = false, length = 80) private String categoria;
    @Column(nullable = false, columnDefinition = "TEXT") private String descricao;
    @Column(nullable = false, columnDefinition = "TEXT") private String tags = "";
    @Column(length = 500) private String link;
    @Column(length = 500) private String imagem;
    @Column(nullable = false) private boolean destaque;
}
