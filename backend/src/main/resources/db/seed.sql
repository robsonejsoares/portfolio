INSERT INTO projetos (titulo, categoria, descricao, tags, link, imagem, destaque)
SELECT 'Smart Clin', 'Sistemas Web', 'Plataforma web para gestão de clínicas.', 'Next.js,React,TypeScript,Tailwind CSS', 'https://smart-clin.vercel.app/', 'https://smart-clin.vercel.app/logo-smart-clin.png', TRUE
WHERE NOT EXISTS (SELECT 1 FROM projetos WHERE titulo = 'Smart Clin');

INSERT INTO projetos (titulo, categoria, descricao, tags, link, imagem, destaque)
SELECT 'Portfólio - Robson Soares', 'Portfólio Web', 'Portfólio profissional para apresentar projetos e habilidades.', 'Next.js,React,TypeScript,Tailwind CSS', 'https://zayroncode.com.br/portfolio/robson-soares', 'https://zayroncode.com.br/favicon.svg', TRUE
WHERE NOT EXISTS (SELECT 1 FROM projetos WHERE titulo = 'Portfólio - Robson Soares');

INSERT INTO servicos (titulo, descricao, icone)
SELECT 'Desenvolvimento Web', 'Sistemas web e landing pages modernas com tecnologias atuais.', 'Code'
WHERE NOT EXISTS (SELECT 1 FROM servicos WHERE titulo = 'Desenvolvimento Web');

INSERT INTO habilidades (categoria, nome, nivel, ordem)
SELECT 'Backend', 'Java / Spring Boot', 5, 1
WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nome = 'Java / Spring Boot');

INSERT INTO habilidades (categoria, nome, nivel, ordem)
SELECT 'Banco de dados', 'PostgreSQL', 5, 2
WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nome = 'PostgreSQL');

INSERT INTO carreiras (cargo, empresa, periodo, tipo, descricao, conquistas)
SELECT 'Desenvolvedor Full Stack Freelancer', 'Projetos Autônomos', '2023 - Presente', 'Freelance', 'Desenvolvimento de aplicações web modernas.', 'Aplicações escaláveis e componentes reutilizáveis.'
WHERE NOT EXISTS (SELECT 1 FROM carreiras WHERE cargo = 'Desenvolvedor Full Stack Freelancer');
