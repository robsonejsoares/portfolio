package br.com.robsonsoares.portfolio.contact;

import jakarta.persistence.*;
import lombok.*;
import java.time.OffsetDateTime;

@Entity @Table(name="mensagens_contato") @Getter @Setter @NoArgsConstructor
public class MensagemContato {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  @Column(nullable=false, length=120) private String nome;
  @Column(nullable=false, length=254) private String email;
  @Column(length=160) private String empresa;
  @Column(length=160) private String projeto;
  @Column(columnDefinition="TEXT") private String mensagem;
  @Column(nullable=false) private OffsetDateTime dataEnvio;
  @Column(nullable=false) private boolean lida = false;
  @PrePersist void prePersist(){ if(dataEnvio == null) dataEnvio = OffsetDateTime.now(); }
}
