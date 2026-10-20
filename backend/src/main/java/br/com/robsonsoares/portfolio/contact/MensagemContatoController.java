package br.com.robsonsoares.portfolio.contact;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/contato")
public class MensagemContatoController {
  private final MensagemContatoRepository repository;
  public MensagemContatoController(MensagemContatoRepository repository){this.repository=repository;}
  @PostMapping @ResponseStatus(HttpStatus.CREATED) public MensagemContato create(@Valid @RequestBody MensagemContato item){return repository.save(item);}
  @GetMapping @PreAuthorize("hasRole('ADMIN')") public List<MensagemContato> findAll(){return repository.findAll();}
  @DeleteMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id){repository.deleteById(id);}
}
