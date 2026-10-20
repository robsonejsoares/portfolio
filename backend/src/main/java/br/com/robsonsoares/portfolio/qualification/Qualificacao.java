package br.com.robsonsoares.portfolio.qualification;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity @Table(name="qualificacoes") @Getter @Setter @NoArgsConstructor
public class Qualificacao {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  @Column(nullable=false, length=200) private String titulo;
  @Column(nullable=false, length=200) private String instituicao;
  @Column(nullable=false, length=80) private String tipo;
  private LocalDate dataInicio;
  private LocalDate dataFim;
  @Column(columnDefinition="TEXT") private String descricao;
  @Column(length=500) private String documentoUrl;
}
