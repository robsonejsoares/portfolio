package br.com.robsonsoares.portfolio.career;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/carreiras")
public class CarreiraController {
  private final CarreiraRepository repository;
  public CarreiraController(CarreiraRepository repository){this.repository=repository;}
  @GetMapping public List<Carreira> findAll(){return repository.findAll();}
  @PostMapping @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.CREATED) public Carreira create(@Valid @RequestBody Carreira item){return repository.save(item);}
  @PutMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") public Carreira update(@PathVariable Long id,@Valid @RequestBody Carreira item){item.setId(id);return repository.save(item);}
  @DeleteMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id){repository.deleteById(id);}
}
