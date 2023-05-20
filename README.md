
# Boas vindas ao projeto API loja de games.

# Sumário

- [Comentários sobre o projeto](#comentários-sobre-o-projeto)
- [O que é a Api loja de games?](#o-que-é-a-api-loja-de-games)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Deploy](#deploy)
- [Instalação e uso](#instalação-e-uso)
- [Documentação API](#documentação-da-api)
- [Testes](#testes)


---

###  Comentários sobre o projeto

Tenho como um hobby jogar video game, desde a minha infância até atualmente ainda jogo e frequentei bastante lojas físicas na época do super nintendo onde comprava cartuchos dos jogos e posteriormente comprava os cds dos jogos de playstation 2, lembro da sensação de ficar fascinado ao entrar na loja e ver aquela quantidade grande de jogos, posteriormente tive um xbox 360 e o xbox One e passei a frequentar mais as lojas virtuais e até hoje as frequento para comprar jogos e as ver novidades.

Após o módulo de back end no curso da Trybe, curti bastante a atuação dessa área e decidi unir em um projeto duas coisas que fazem parte da minha história que são lojas de games e back end.

Após um tempo e já com experiência de mercado voltei nesse projeto e o deixei mais atualizado contando com tecnologias que uso bastante no cotidiano

Atualmente o projeto está em evolução e está sendo uma experiência enriquecedora para mim pois esse está sendo desenvolvendo com TDD 'Test Driven Development' ao mesmo tempo que uso e me aprofundo em tecnologias como nodejs, typescript, orientação a objetos, docker, sequelize, mysql, bcrypt, jwt, swagger, dockoly.


possui alguma dúvida, feedback ou quer entrar em contato comigo? 
procure me através do email: tiago.emanuel.n@gmail.com

---

# O que é a Api Loja de Games?

Uma aplicação Back end onde é possível registrar, listar, editar e deletar (fazer o famoso CRUD) de usuários, produtos e vendas relacionadas ao contexto de uma loja virtual de games, a api foi construida no paradigma orientado a objetos(POO) possuindo funcionalidade como, por exemplo, um sistema de login, encriptação de senha no banco de dados e também foi utilizado typescript e swagger.

---

# Tecnologias envolvidas:
<div>
  <a href="https://www.typescriptlang.org/">
    	<img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a>
  <a href="https://javascript.info/">
    	<img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=gray" />
  </a>
  <a href="https://docs.npmjs.com/">
  	<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a>
  <a href="https://www.docker.com/">
	<img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />
  </a>
  <a href="https://railway.app/">
  	<img src="https://img.shields.io/badge/railway-339933?style=for-the-badge&logo=railway&color=gray" />
  </a>
  <a href="https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos">
    <img src="https://img.shields.io/badge/Poo-339933?style=for-the-badge&logo=Poo&color=gray" /> 
  </a>
  <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=gray" /> 
  </a>
  <a href="https://dev.mysql.com/doc/">
    <img src="https://img.shields.io/badge/MySQL-339933?style=for-the-badge&logo=mysql&color=gray" />
  </a>
  <a href="https://sequelize.org/">
    <img src="https://img.shields.io/badge/Sequelize-339933?style=for-the-badge&logo=sequelize&color=gray" />
  </a>
  <a href="https://nodemon.io/">
    <img src="https://img.shields.io/badge/nodemon-339933?style=for-the-badge&logo=nodemon&color=gray" />
  </a>
  <a href="https://swagger.io/">
    <img src=" https://img.shields.io/badge/swagger-339933?style=for-the-badge&logo=swagger&color=gray" />
  </a>
  <a href="https://mochajs.org/">
    <img src=" https://img.shields.io/badge/mocha-339933?style=for-the-badge&logo=mocha&color=gray "/>
  </a>
    <a href="https://www.chaijs.com/">
    <img src=" https://img.shields.io/badge/chai-339933?style=for-the-badge&logo=chai&color=gray "/>
  </a>
  <a href="https://www.npmjs.com/package/dotenv">
    <img src=" https://img.shields.io/badge/dotenv-339933?style=for-the-badge&logo=dotenv&color=gray "/>
  </a>
    <a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/git-339933?style=for-the-badge&logo=git&color=gray" />
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/eslint-339933?style=for-the-badge&logo=eslint&color=gray" />
  </a>
  <a href="https://www.npmjs.com/package/bcryptjs">
    <img src="https://img.shields.io/badge/bcryptjs-339933?style=for-the-badge&logo=bcryptjs&color=gray" />
  </a>
  <a href="https://sinonjs.org/">
    <img src="https://img.shields.io/badge/sinon-339933?style=for-the-badge&logo=sinon&color=gray" />
  </a>
      <a href="https://jwt.io/">
    <img src="https://img.shields.io/badge/jsonwebtoken-339933?style=for-the-badge&logo=jsonwebtoken&color=gray" />
  </a>
    <a href="https://redocly.com/">
    <img src=" https://img.shields.io/badge/redocly-339933?style=for-the-badge&logo=redocly&color=gray" />
  </a>
  </div>
  
---
# Deploy

Acesse [gamestore.up.railway.app/docs](https://gamestore.up.railway.app/docs) e use a aplicação em tempo real em sua máquina

Para usar em uma aplicação frontend basta utilizar a url [gamestore.up.railway.app](https://gamestore.up.railway.app) 

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone [https://github.com/TiagoEmanuel8/API-loja-de-games.git](https://github.com/TiagoEmanuel8/API-loja-de-games.git)  
  
```  
  
Entre na pasta  
  
```  
cd API-loja-de-games
  
```  
### Executando o projeto com **docker**

<details>

<summary>Clique para exibir os detalhes</summary>


### Execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up -d && docker exec -it api_store bash
```  
### Instale as dependências  
  
```  
npm install  
```  
  ### Crie uma build do projeto
```  
npm run build  
```  
  ### Popule o banco de dados  
  
```  
npm run sequelize  
```  

### Execute o projeto  
  
```  
npm start  
```  
### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down --rmi local --volumes --remove-orphans
```  

*Obs: apesar do docker ter abordagens mais simples onde com um comando é possível criar tudo, mas meu objetivo inicial era popular o banco de dados sem a necessidade de testar todas as rotas e para isso deveria usar as seeders do sequelize, então a melhor solução que encontrei foi essa.*

</details>

### Executando o projeto **localmente**

<details>

<summary>Clique para exibir os detalhes</summary>
  
### Instale as dependências  
  
```  
npm install  
```  
  ### Crie uma build do projeto
```  
npm run build  
```  
  ### Popule o banco de dados  
  
```  
npm run sequelize  
```  

### Execute o projeto  
  
```  
npm start  
```

</details>

---

# Documentação da API

Os dados foram gerados no site [4devs](https://www.4devs.com.br/gerador_de_pessoas)

A documentação foi feita com o [Swagger](https://swagger.io/) e [Redocly](https://redocly.com/)

### caso queira utilizar **swagger** acesse a rota `/docs` em seu browser

<details>

<summary>Clique para exibir mais detalhes</summary>

 - Caso esteja rodando a aplicação **localmente** acesse http://localhost:3001/docs/
 *no exemplo acima o 3001 é o exemplo de onde a aplicação está rodando localmente*
 
 - Caso esteja rodando com **docker**  acesse http://localhost:3001/docs/
 - Caso esteja rodando no **site**  acesse https://site.com.br/docs/
	
</details>

e o swagger irá carregar em seu browser

![swagger api game store](https://github.com/TiagoEmanuel8/API-loja-de-games/assets/72472530/dd3177ea-7f14-48fc-a6b8-35d2da324b36)


ou

### caso queira utilizar **redocly** acesse a rota `/documentation` em seu browser

<details>

<summary>Clique para exibir mais detalhes</summary>

 - Caso esteja rodando a aplicação **localmente** acesse http://localhost:3001/documentation/
 *no exemplo acima o 3001 é o exemplo de onde a aplicação está rodando localmente*
 - Caso esteja rodando com **docker**  acesse http://localhost:3001/documentation/
 - Caso esteja rodando no **site**  acesse https://site.com.br/documentation/
Com exceção do endpoint `POST /users`, as seguintes verificações serão feitas para os outros endpoints da aplicação.

</details>

e o redocly irá carregar em seu browser

![redocky](https://github.com/TiagoEmanuel8/API-loja-de-games/assets/72472530/df33180d-fe78-4cde-bf57-a1ddcec7055e)


Obs: para facilitar o acesso as rotas protegidas por token criei um usuário com privilégios admnistrativos, então caso queira use as credenciais abaixo na rota `/login` para gerar um novo token:
`email:  "reginastellabarbosa@gmail.com"`,
`password: "p9iBFXc3wf"`


---

# Testes
Os arquivos de teste foram subdivididos em 4 `login`, `products`, `sales` e `users`.

É possível testar todos os arquivos com o comando `npm run test`

Segue os passos para realização dos testes

 1. Instalação do projeto e ligar o servidor-  É necessário a instalação do projeto, *se tiver dúvidas leia a parte de [Instalação e uso](#instalação-e-uso) desse readme* , após a instalação abra seu terminal e digite o comando `npm start` ou `npm run dev` para ligar o servidor.
 2. Se deseja realizar um teste de toda a aplicação digite o comando `npm test`
 

## Segue abaixo imagens de teste dessa aplicação

![Captura de tela de 2023-05-12 21-12-34](https://github.com/TiagoEmanuel8/API-loja-de-games/assets/72472530/a92d083c-9ee1-4bbe-951d-f61a14e1681c)
