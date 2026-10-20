package br.com.robsonsoares.portfolio.project;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class ProjetoService {
    private final ProjetoRepository repository;
    public ProjetoService(ProjetoRepository repository) { this.repository = repository; }
    @Transactional(readOnly = true) public List<Projeto> findAll() { return repository.findAll(); }
    @Transactional(readOnly = true) public Projeto findById(Long id) { return repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Projeto não encontrado.")); }
    public Projeto save(Projeto projeto) { return repository.save(projeto); }
    public Projeto update(Long id, Projeto data) { Projeto current = findById(id); current.setTitulo(data.getTitulo()); current.setCategoria(data.getCategoria()); current.setDescricao(data.getDescricao()); current.setTags(data.getTags()); current.setLink(data.getLink()); current.setImagem(data.getImagem()); current.setDestaque(data.isDestaque()); return repository.save(current); }
    public void delete(Long id) { repository.delete(findById(id)); }
}
