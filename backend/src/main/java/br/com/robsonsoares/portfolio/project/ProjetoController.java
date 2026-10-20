package br.com.robsonsoares.portfolio.project;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projetos")
public class ProjetoController {
    private final ProjetoService service;
    public ProjetoController(ProjetoService service) { this.service = service; }
    @GetMapping public List<Projeto> findAll() { return service.findAll(); }
    @GetMapping("/{id}") public Projeto findById(@PathVariable Long id) { return service.findById(id); }
    @PostMapping @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.CREATED) public Projeto create(@Valid @RequestBody Projeto projeto) { return service.save(projeto); }
    @PutMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") public Projeto update(@PathVariable Long id, @Valid @RequestBody Projeto projeto) { return service.update(id, projeto); }
    @DeleteMapping("/{id}") @PreAuthorize("hasRole('ADMIN')") @ResponseStatus(HttpStatus.NO_CONTENT) public void delete(@PathVariable Long id) { service.delete(id); }
}
