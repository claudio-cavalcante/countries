# Countries
## Listagem de países, detalhes e edição.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Resumo
Este projeto faz parte de um desafio. Não está completo e nem atende aos melhores práticas de segurança. Seu propósito é apenas de estudo e avaliação.

## Features

- Listagem dos dados dos países (bandeira, nome, capital)
- Busca paginada de apenas 12 países por vez, sendo possível carregar mais países
- Permitida busca pelo nome do país ou pelo nome da capital (Case sensitive)
- Listagem dos detalhes dos países ao clicar em 'Mais detalhes' (Além do nome do país e capital, são listados a área, a população e o top level domain).
- Permitido salvar o país na WebApi (Api Custom Countries).

## Instalação

É necessário [Node.js](https://nodejs.org/) para rodar este projeto

Primeiro de tudo, baixe o projeto da API GRAPH Countries que se localiza em https://github.com/lennertVanSever/graphcountries e siga todas as instruções para rodar este projeto.

Em seguida, baixe este projeto que contém 2 subprojetos:
 
- client (frontend)          
- server (backend)

## SERVER

Pré-requisitos:

* [.NET Core instalado](https://docs.microsoft.com/pt-br/dotnet/core/install/windows?tabs=net50)

Começando:

1. No repositório baixado, navegue para /server
2. Edite o arquivo appsettings.json e informe a string de conexão do banco de dados em ConnectionStrings > CountryContext ou crie uma variável de ambiente no sistema operacional com a seguinte chave 'ConnectionStrings:CountryContext'.
3. Rode o projeto com `dotnet run`
4. Documentação da API pode ser acessada em [localhost]/swagger/index.html

## CLIENT
Pré-requisitos:

* [NodeJS e npm instalados](https://nodejs.org/en/download/)

Começando:

1. No repositório baixado, navegue para /client/src/config.json
2. Edita as informações do JSON de acordo com os projetos que estão rodando

```
"SERVER_URL": (URL DO SERVIDOR do projeto localizado em /server)
"GRAPHQL_SERVER_URL": (URL do servidor graphcountries citado acima)
"USER": usuário 'test' do projeo localizado em /server
"PASSWORD": senha 'test' do projeto localizado em /server
```

3. Baixe as dependências com `npm install`
4. Com os dois projetos anteriores rodando (graphcountries e server) rode este projeto com o comando `npm start` 


## License

MIT

**Free Software, Hell Yeah!**