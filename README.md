# Boas vindas ao projeto API-loja-de-games

# Sumário

- [Comentários sobre o projeto](#comentários-sobre-o-projeto)
- [O que é a Api loja de games?](#o-que-é-a-api-loja-de-games)
- [Deploy](#deploy)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Funcionalidades](#funcionalidades)
- [Documentação API](#documentação-api)
- [Testes](#testes)
- [Instalação e uso](#instalação-e-uso)

---

###  Comentários sobre o projeto

Tenho como um hobby jogar video game, desde a minha infância até atualmente ainda jogo e frequentei bastante lojas físicas na época do super nintendo onde comprava cartuchos dos jogos e posteriormente comprava os cds dos jogos de playstation 2, lembro da sensação de ficar fascinado ao entrar na loja e ver aquela quantidade grande de jogos, posteriormente tive um xbox 360 e o xbox One e passei a frequentar mais as lojas virtuais e até hoje as frequento para comprar jogos e as ver novidades.

Após o módulo de back end no curso da Trybe, curti bastante a atuação dessa área e decidi unir em um projeto duas coisas que fazem parte da minha história que são lojas de games e back end. 

Atualmente o projeto está em construção, mas está sendo uma experiência enriquecedora para mim pois esse está sendo desenvolvendo com TDD 'Test Driven Development' ao mesmo tempo que uso e me aprofundo em tecnologias como nodejs, sequelize, mysql além de multer, bcrypt e jwt.

Em breve atualizarei com mais informações esse readme, como também farei o deploy do mesmo.

possui alguma dúvida, feedback ou quer entrar em contato comigo? 
procure me através do email: tiago.emanuel.n@gmail.com

---

# O que é a Api Loja de Games?

Uma aplicação Back end onde é possível registrar, listar, editar e deletar (fazer o famoso CRUD) de usuários, produtos e vendas relacionadas ao contexto de uma loja virtual de games, a api também possui um sistema de login, encriptação de senha no banco de dados e permite a visualização dos produtos.

---

# Deploy
Acesse https://api-store-game.herokuapp.com/ e veja a API rodando em tempo real em sua máquina.

**obs: tentei fazer o deploy do banco de dados mysql, porém o heroku exige cadastro de cartão de crédito internacional mesmo que seja no plano free, como não tenho cartão de crédito internacional não consegui fazer deploy do banco de dados, até onde pesquisei existiria o serviço da AWS, mas também eu não iria conseguir o deploy do banco de dados, pois existe a mesma exige de cadastro de cartão de crédito internacional mesmo que fosse usar o plano free de deploy do banco de dados. No dia que tiver um cartão de crédito internacional pretendo finalizar essa parte da API**

---

# Tecnologias envolvidas:
 - Javascript
 - NodeJs
 - Mysql
 - Jest
 - Sequelize
 - Jwt
 - Bcrypt
 - Multer
 - Heroku

---

# Funcionalidades

**Fluxo de usuários**

- Cadastrar um novo usuário.
- Logar como user no sistema.
- Listar Todos os usuários.
- Listar um único usuário.
- Editar usuários.
- Deletar usuários.

**Fluxo de produtos**

- Cadastrar um novo produto.
- Adicionar imagem ao produto.
- Listar todos os produtos.
- Listar um produto.
- Editar um produto.
- Deletar um produto.

**Fluxo de vendas**

- Criar vendas.
- Listar todas as vendas.
- Listar uma venda.

---

# Documentação API

Os dados foram gerados no site [4devs](https://www.4devs.com.br/gerador_de_pessoas)

Com exceção do endpoint `POST /users`, as seguintes verificações serão feitas para os outros endpoints da aplicação.

*Verifica se o Token existe*

![GERAL - necessita do token](https://user-images.githubusercontent.com/72472530/147264947-868139a2-f2f7-42c2-ba65-bd07aeb63f58.png)

*Verifica se o Token é válido*

![GERAL - verifica token](https://user-images.githubusercontent.com/72472530/147265050-c2e366c7-d0f6-49a8-91a8-c606308ffe4f.png)


### 1 - A aplicação tem o endpoint `POST /users`


Esse endpoint é responsável pelo cadastro de um novo usuário no sistema

*Exemplo de requisição*

![1 - cadastro user](https://user-images.githubusercontent.com/72472530/147265085-1f45e992-e3ec-4d90-96b9-e106fa0a826c.png)


Será validado que os campos `name`,  `email`, `password`, `cpf` , `address`, `district`, `city`,  `state`, `country`,  `cep` são de preenchimento **obrigatórios** e caso sejam passados vazios o erro será disparado.

*Exemplo de requisição*

![1 - verifica campos](https://user-images.githubusercontent.com/72472530/147265106-9b415d8d-9bfa-4f11-aec9-6c2e7803e6b6.png)

Será validado que para cadastrar um usuário novo, o **email não deve estar em uso**, caso seja diferente a API retornará um erro.

*Exemplo de requisição*

![1 - verifica email](https://user-images.githubusercontent.com/72472530/147265118-4765e86b-8f02-44f6-a096-e1a9c7a53117.png)

Será validado que a senha deve ter entre **6 e 10 caracteres**, caso seja um valor diferente a API retornará um erro.

*Exemplo de requisição*

![1 - verifica senha](https://user-images.githubusercontent.com/72472530/147265140-19f48e09-a866-4b9e-9c33-54393097a5fe.png)

*Obs: apesar da senha ser curta, a mesma será criptografada no registro do banco de dados com o **bcrypt**, dessa forma só o usuário saberá a senha. do seu login.*

Será validado que o email deve ter o formato correto, como por exemplo: `email@email.com`, caso seja diferente a API retornará um erro.

*Exemplo de requisição*

![1 - verifica email](https://user-images.githubusercontent.com/72472530/147265210-c47345c2-4863-483e-ba90-2771dbc380e2.png)

Será validado que o campo **role** deve ser `administrator`, `seller` ou `client`, caso seja diferente a API retornará um erro.

*Exemplo de requisição*

![1- verifica a role](https://user-images.githubusercontent.com/72472530/147265242-0a857c21-1d22-43df-a2a4-dedc7d3fc177.png)

---

# Testes
Os arquivos de teste foram subdivididos em 4 `login`, `products`, `sales` e `users`.

É possível testar todos os arquivos de uma única vez ou testar cada arquivo separadamente

Segue os passos para realização dos testes

 1. Instalação do projeto e ligar o servidor-  É necessário a instalação do projeto, *se tiver dúvidas leia a parte de [Instalação e uso](#instalação-e-uso) desse readme* , após a instalação abra seu terminal e digite o comando `npm start` ou `npm run dev` para ligar o servidor.
 2. Se deseja realizar um teste de toda a aplicação digite o comando `npm test`
 3. Caso deseje  testar apenas uma parte isolada da API digite no terminal:
	 - `npm test login.test.js` para testar o fluxo de login,
	 - `npm test products.test.js` para testar o fluxo de produtos.
	 - `npm test sales.test.js` para testar o fluxo de vendas
	 - `npm test users.test.js` para testar o fluxo de usuários

## Segue abaixo imagens de teste dessa aplicação

**Testando toda a aplicação**
<br/>
![teste all](https://user-images.githubusercontent.com/72472530/147251198-ff7d94a1-a47f-406b-9a54-a787c9fe3083.png)

**Testando o fluxo de login**
![teste login](https://user-images.githubusercontent.com/72472530/147251212-b674f01f-817c-49d8-b62f-38a24429155f.png)

**Testando o fluxo de produto**
![teste produto](https://user-images.githubusercontent.com/72472530/147251219-da310fdb-5086-444c-9fa9-a0e3e561b1cf.png)

**Testando o fluxo de usuários**
![teste users](https://user-images.githubusercontent.com/72472530/147251233-d3070028-b200-457e-aca4-345c2d2590d2.png)

**Testando o fluxo de vendas**
![teste vendas](https://user-images.githubusercontent.com/72472530/147251256-5f82959f-856c-4711-8e27-81263ecf1fd1.png)

---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v16.8.0  
- npm 7.21.0  
- git version 2.17.1  
  
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
  
### Instalando as dependências  
  
```  
npm install  
  
```  
  
### Executando o projeto  
  
```  
npm start  
  
```  
---------
