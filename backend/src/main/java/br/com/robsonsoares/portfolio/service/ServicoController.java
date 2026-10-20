package br.com.robsonsoares.portfolio.service;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/servicos")
public class ServicoController {
  private final ServicoRepository repository;
  public ServicoController(ServicoRepository repository){this.repository=repository;}
  @GetMapping public List<Servico> findAll(){return repository.findAll();}
  @GetMapping("/{id}") public Servico findById(@PathVariable Long id){return repository.findById(id).orElseThrow();}
  @PostMapping @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.CREATED) public Servico create(@Valid @RequestBody Servico item){return repository.save(item);}
  @PutMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") public Servico update(@PathVariable Long id,@Valid @RequestBody Servico item){item.setId(id);return repository.save(item);}
  @DeleteMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id){repository.deleteById(id);}
}
