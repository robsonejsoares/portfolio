package br.com.robsonsoares.portfolio.qualification;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/qualificacoes")
public class QualificacaoController {
  private final QualificacaoRepository repository;
  public QualificacaoController(QualificacaoRepository repository){this.repository=repository;}
  @GetMapping public List<Qualificacao> findAll(){return repository.findAll();}
  @PostMapping @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.CREATED) public Qualificacao create(@Valid @RequestBody Qualificacao item){return repository.save(item);}
  @PutMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") public Qualificacao update(@PathVariable Long id,@Valid @RequestBody Qualificacao item){item.setId(id);return repository.save(item);}
  @DeleteMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id){repository.deleteById(id);}
}
