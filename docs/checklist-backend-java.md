# ☕ Checklist de Implementação — Backend Java do Portfólio

**Projeto:** XCODIFY Portfolio Robson Soares 
**Frontend:** Next.js + React + TypeScript  
**Backend:** Java + Spring Boot  
**Banco de dados:** PostgreSQL  
**Objetivo:** aprender Java desenvolvendo uma API REST real para o painel administrativo (ADM).

---

## Etapa 1 — Preparação do ambiente

- [ ] Instalar o JDK LTS compatível com a versão escolhida do Spring Boot.
- [ ] Configurar a variável de ambiente `JAVA_HOME`.
- [ ] Verificar a instalação com `java -version`.
- [ ] Instalar uma IDE, como IntelliJ IDEA ou VS Code com extensões Java.
- [ ] Instalar ou configurar o Maven.
- [ ] Verificar o PostgreSQL e as ferramentas de acesso ao banco.
- [ ] Criar o diretório `portfolio-backend/`.
- [ ] Criar o projeto pelo Spring Initializr.
- [ ] Executar a aplicação inicial.
- [ ] Confirmar que o servidor inicia sem erros.

**Critério de conclusão:** ambiente Java configurado e aplicação Spring Boot executando localmente.

## Etapa 2 — Fundamentos da linguagem Java

- [ ] Variáveis, constantes e tipos primitivos.
- [ ] Strings e conversões de tipos.
- [ ] Operadores aritméticos, relacionais e lógicos.
- [ ] Condicionais: `if`, `else` e `switch`.
- [ ] Laços: `for`, `while` e `do-while`.
- [ ] Arrays.
- [ ] Métodos, parâmetros e valores de retorno.
- [ ] Escopo de variáveis.
- [ ] Tratamento básico de erros.
- [ ] Exercícios práticos de lógica.

**Critério de conclusão:** conseguir criar pequenos programas sem depender de copiar código pronto.

## Etapa 3 — Programação orientada a objetos (POO)

- [ ] Criar classes e instanciar objetos.
- [ ] Definir atributos e métodos.
- [ ] Utilizar construtores.
- [ ] Aplicar encapsulamento.
- [ ] Entender modificadores de acesso.
- [ ] Estudar herança e composição.
- [ ] Trabalhar com interfaces e polimorfismo.
- [ ] Utilizar `enum`.
- [ ] Entender `record` e quando utilizá-lo.
- [ ] Conhecer as principais Collections: `List`, `Set` e `Map`.
- [ ] Entender generics.
- [ ] Tratar exceções com `try`, `catch` e exceções próprias.

**Critério de conclusão:** modelar objetos como Projeto, Serviço e Experiência Profissional.

## Etapa 4 — Fundamentos de backend e HTTP

- [ ] Entender cliente, servidor e API.
- [ ] Estudar HTTP e HTTPS.
- [ ] Entender os métodos GET, POST, PUT, PATCH e DELETE.
- [ ] Conhecer os códigos HTTP mais utilizados.
- [ ] Entender JSON.
- [ ] Conhecer os conceitos de REST.
- [ ] Testar requisições com Postman, Insomnia ou ferramenta equivalente.

**Critério de conclusão:** compreender como o Next.js enviará requisições para o backend Java.

## Etapa 5 — Criar a API com Spring Boot

- [ ] Entender a estrutura de um projeto Spring Boot.
- [ ] Conhecer injeção de dependências.
- [ ] Criar o primeiro `@RestController`.
- [ ] Implementar uma rota GET de teste.
- [ ] Criar uma rota POST.
- [ ] Entender `@RequestBody` e parâmetros de rota.
- [ ] Implementar validação com Jakarta Bean Validation.
- [ ] Organizar as responsabilidades em Controller, Service e Repository.
- [ ] Criar tratamento centralizado de erros.
- [ ] Testar os endpoints.

**Critério de conclusão:** API REST funcional, com validação e respostas HTTP adequadas.

## Etapa 6 — PostgreSQL e persistência

- [ ] Revisar tabelas, colunas, chaves primárias e estrangeiras.
- [ ] Estudar SELECT, INSERT, UPDATE e DELETE.
- [ ] Criar um banco exclusivo para o backend.
- [ ] Configurar a conexão com PostgreSQL.
- [ ] Adicionar Spring Data JPA e o driver PostgreSQL.
- [ ] Entender entidades e mapeamentos JPA.
- [ ] Conhecer Hibernate e o ciclo de persistência.
- [ ] Criar entidades e repositórios.
- [ ] Implementar paginação e ordenação quando necessário.
- [ ] Configurar migrações de banco com Flyway ou ferramenta equivalente.
- [ ] Testar persistência e relacionamentos.

**Critério de conclusão:** API salvando e consultando dados reais no PostgreSQL.

## Etapa 7 — CRUD de projetos

- [ ] Criar a entidade `Projeto`.
- [ ] Definir os campos necessários.
- [ ] Criar DTOs para entrada e saída.
- [ ] Criar `ProjetoRepository`.
- [ ] Criar `ProjetoService`.
- [ ] Criar `ProjetoController`.
- [ ] Implementar listagem de projetos.
- [ ] Implementar consulta por ID.
- [ ] Implementar cadastro.
- [ ] Implementar atualização.
- [ ] Implementar exclusão.
- [ ] Validar campos obrigatórios.
- [ ] Tratar registros inexistentes.
- [ ] Testar todos os endpoints.

**Critério de conclusão:** CRUD de projetos funcional, com dados persistidos no banco.

## Etapa 8 — Completar os recursos do ADM

- [ ] CRUD de serviços.
- [ ] CRUD de experiências profissionais.
- [ ] CRUD de formação acadêmica.
- [ ] CRUD de habilidades.
- [ ] Gerenciamento de informações do perfil.
- [ ] Gerenciamento de links sociais.
- [ ] Definir relacionamentos necessários entre entidades.
- [ ] Criar paginação e filtros quando fizer sentido.
- [ ] Definir como imagens e arquivos serão armazenados.
- [ ] Revisar validações e regras de negócio.

**Critério de conclusão:** recursos necessários para administrar o portfólio disponíveis pela API.

## Etapa 9 — Autenticação e autorização

- [ ] Definir o mecanismo de autenticação.
- [ ] Criar o usuário administrador.
- [ ] Armazenar senhas usando hash seguro.
- [ ] Configurar Spring Security.
- [ ] Proteger os endpoints administrativos.
- [ ] Separar autenticação de autorização.
- [ ] Definir como o frontend manterá a sessão.
- [ ] Configurar CORS para as origens autorizadas.
- [ ] Proteger contra acesso não autorizado.
- [ ] Validar permissões no servidor.
- [ ] Não armazenar segredos no código-fonte.
- [ ] Testar login, logout, sessão expirada e tentativas não autorizadas.

**Critério de conclusão:** somente usuários autorizados conseguem executar operações administrativas.

## Etapa 10 — Integração com Next.js

- [ ] Definir a URL base da API.
- [ ] Configurar variáveis de ambiente.
- [ ] Criar uma camada de acesso à API no frontend.
- [ ] Integrar a listagem de projetos.
- [ ] Integrar cadastro e edição de projetos.
- [ ] Integrar exclusão com confirmação.
- [ ] Integrar os demais recursos do ADM.
- [ ] Exibir estados de carregamento.
- [ ] Tratar erros de conexão e validação.
- [ ] Garantir que o frontend público exiba os dados da API.
- [ ] Verificar autenticação em todas as operações protegidas.
- [ ] Testar frontend e backend executando separadamente.

**Critério de conclusão:** painel Next.js consumindo a API Java corretamente.

## Etapa 11 — Testes e qualidade

- [ ] Escrever testes unitários para os serviços.
- [ ] Testar os controllers.
- [ ] Criar testes de integração com o banco.
- [ ] Validar cenários de sucesso e erro.
- [ ] Testar permissões e autenticação.
- [ ] Verificar logs e tratamento de exceções.
- [ ] Documentar endpoints com OpenAPI/Swagger.
- [ ] Executar a suíte de testes.
- [ ] Verificar a compilação e o empacotamento.
- [ ] Revisar o código e remover duplicações desnecessárias.

**Critério de conclusão:** API testada, documentada e compilando corretamente.

## Etapa 12 — Configuração para produção

- [ ] Separar configurações de desenvolvimento e produção.
- [ ] Configurar segredos por variáveis de ambiente.
- [ ] Preparar as migrações do banco.
- [ ] Configurar HTTPS.
- [ ] Definir política de CORS restrita.
- [ ] Configurar logs e monitoramento.
- [ ] Definir backups do PostgreSQL.
- [ ] Preparar o deploy do backend.
- [ ] Configurar a URL de produção no frontend.
- [ ] Testar o fluxo completo em ambiente de homologação.
- [ ] Validar segurança e recuperação de falhas.

**Critério de conclusão:** backend preparado para publicação com configurações seguras.

---

## Resumo do progresso

- [ ] Ambiente Java configurado.
- [ ] Fundamentos de Java concluídos.
- [ ] POO concluída.
- [ ] Primeira API criada.
- [ ] PostgreSQL integrado.
- [ ] CRUD de projetos implementado.
- [ ] Recursos administrativos implementados.
- [ ] Autenticação e autorização implementadas.
- [ ] Frontend integrado.
- [ ] Testes executados.
- [ ] Produção preparada.

## Regras de implementação

1. Aprender os conceitos antes de avançar para a próxima etapa.
2. Implementar uma funcionalidade por vez.
3. Testar cada alteração antes de continuar.
4. Nunca expor credenciais ou senhas no repositório.
5. Não substituir o frontend atual sem necessidade.
6. Marcar uma tarefa como concluída somente depois de validá-la.
