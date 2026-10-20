package br.com.robsonsoares.portfolio.service;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name = "servicos") @Getter @Setter @NoArgsConstructor
public class Servico {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
  @Column(nullable=false, length=160) private String titulo;
  @Column(nullable=false, columnDefinition="TEXT") private String descricao;
  @Column(length=80) private String icone;
}
