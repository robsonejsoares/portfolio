package br.com.robsonsoares.portfolio.skill;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name="habilidades") @Getter @Setter @NoArgsConstructor
public class Habilidade {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  @Column(nullable=false, length=120) private String categoria;
  @Column(nullable=false, length=120) private String nome;
  @Column(nullable=false) private Integer nivel = 1;
  @Column(nullable=false) private Integer ordem = 0;
}
