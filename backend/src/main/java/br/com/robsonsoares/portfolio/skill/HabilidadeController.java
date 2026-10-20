package br.com.robsonsoares.portfolio.skill;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/habilidades")
public class HabilidadeController {
  private final HabilidadeRepository repository;
  public HabilidadeController(HabilidadeRepository repository){this.repository=repository;}
  @GetMapping public List<Habilidade> findAll(){return repository.findAll();}
  @PostMapping @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.CREATED) public Habilidade create(@Valid @RequestBody Habilidade item){return repository.save(item);}
  @PutMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") public Habilidade update(@PathVariable Long id,@Valid @RequestBody Habilidade item){item.setId(id);return repository.save(item);}
  @DeleteMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id){repository.deleteById(id);}
}
