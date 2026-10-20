# Checklist de deploy

## Frontend

- [ ] Configurar `NEXT_PUBLIC_API_URL` com a URL HTTPS do backend.
- [ ] Publicar o branch `v0/java-postgresql-backend` após revisar as alterações.
- [ ] Confirmar que `/` redireciona para `/portfolio/robson-soares`.
- [ ] Validar modo claro/escuro, formulário de contato e login.

## Backend

- [ ] Executar com Java compatível e Maven.
- [ ] Configurar `DATABASE_URL`, `DATABASE_USERNAME` e `DATABASE_PASSWORD`.
- [ ] Configurar `JWT_SECRET` com pelo menos 32 caracteres aleatórios.
- [ ] Configurar `CORS_ALLOWED_ORIGINS` somente com os domínios oficiais.
- [ ] Executar e revisar as migrations Flyway.
- [ ] Confirmar Swagger em `/swagger-ui/index.html`.
- [ ] Criar o administrador inicial com senha forte.

## Segurança e 2FA

- [ ] Configurar HTTPS no frontend e backend.
- [ ] Configurar provedor real de e-mail, SMS e Authenticator.
- [ ] Testar recuperação e revogação de sessões.
- [ ] Verificar rate limit no login e contato.
