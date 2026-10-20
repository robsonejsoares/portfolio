package br.com.robsonsoares.portfolio.project;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProjetoRepository extends JpaRepository<Projeto, Long> {
    List<Projeto> findByCategoriaIgnoreCase(String categoria);
    List<Projeto> findByDestaqueTrueOrderByIdDesc();
}
