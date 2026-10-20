package br.com.robsonsoares.portfolio.career;

import jakarta.persistence.*;
import lombok.*;

@Entity @Table(name="carreiras") @Getter @Setter @NoArgsConstructor
public class Carreira {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  @Column(nullable=false, length=160) private String cargo;
  @Column(nullable=false, length=160) private String empresa;
  @Column(nullable=false, length=120) private String periodo;
  @Column(length=80) private String tipo;
  @Column(columnDefinition="TEXT") private String descricao;
  @Column(nullable=false, columnDefinition="TEXT") private String conquistas = "";
}
