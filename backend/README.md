# Backend do portfólio

Spring Boot 3 + PostgreSQL + Flyway + JWT.

## Executar

```bash
mvn spring-boot:run
```

A documentação Swagger fica disponível em `/swagger-ui.html` e o OpenAPI em `/v3/api-docs`.

## Docker

```bash
docker compose up --build
```

Configure `DATABASE_URL`, `DATABASE_USERNAME`, `DATABASE_PASSWORD` e `JWT_SECRET` no ambiente de produção. Nunca use a chave JWT padrão fora do desenvolvimento.
