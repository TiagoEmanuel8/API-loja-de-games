# O projeto encontra-se em atualização, estou adicionando typescript, nestjs, swagger e docker.

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

### 2 - A aplicação tem o endpoint `POST /login`

Esse endpoint é responsável pelo **login** no sistema.

*Exemplo de requisição*

![2 - login](https://user-images.githubusercontent.com/72472530/147272448-2d9ccaa5-cf12-418d-b66a-37c5a9ad06de.png)

Será validado que os campos `email` e `password` são **obrigatórios**, caso contrário a API retornará um erro.

*Exemplo de requisição*

![2 - verifica preenchimento campos](https://user-images.githubusercontent.com/72472530/147272465-f8b7ea59-66dd-4e3b-bbda-e98d91301e31.png)

Será validado que o campo `email` deve estar **registrado no banco de dados**,  caso contrário a API retornará um erro.

*Exemplo de requisição*

![2 - verifica email](https://user-images.githubusercontent.com/72472530/147272491-cbbf3938-685f-4682-9cd6-ac85f50fb1db.png)

Será validado que a `senha` passada no login do usuário deve ser a mesma cadastrada no banco de dados,  caso contrário a API retornará um erro.

*Exemplo de requisição*

![2 - valida senha](https://user-images.githubusercontent.com/72472530/147272506-7b122b5a-ef3b-4bb3-a736-01bed5a7c5eb.png)

### 3 - A aplicação tem o endpoint `GET /users`

Esse endpoint é responsável por **listar** todos os usuários cadastrados no banco de dados

*Exemplo de requisição*

![3 - listagem usuarios](https://user-images.githubusercontent.com/72472530/147272594-f04f7bdb-ee62-4798-90be-fc3129d103db.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![3 - verifica usuario](https://user-images.githubusercontent.com/72472530/147272778-90f8200f-fea6-4319-a52a-ba9d96646923.png)

### 4 - A aplicação tem o endpoint `GET /users/:id`

Esse endpoint é responsável por **listar** um único usuário cadastrado no banco de dados

*Exemplo de requisição*

![4 - listar user](https://user-images.githubusercontent.com/72472530/147272821-6df1f5a8-5c64-46bb-9492-9ee7dfd7ede0.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![4 - verifica tipo login](https://user-images.githubusercontent.com/72472530/147272848-1a238c32-a25d-409a-9f0b-e2ca62e8d085.png)

Será validado que o `id` deve **corresponder a um usuário cadastrado**, caso contrário a API será retornará um erro.

*Exemplo de requisição*

![4 - verifica se o user existe](https://user-images.githubusercontent.com/72472530/147272885-faf3da77-fb7a-471a-b637-704a6d1f49df.png)

### 5 - A aplicação tem o endpoint `PUT /users/:id`

Esse endpoint é responsável por **editar** único usuário.

*Exemplo de requisição*

![5 - edita usuario](https://user-images.githubusercontent.com/72472530/147272921-051c266f-664e-47fa-9669-584b16c02614.png)

Será validado que o campo `role` não pode ser editado, caso contrário a API será retornará um erro.

*Exemplo de requisição*

![5 - valida que o campo role nao pode ser editado](https://user-images.githubusercontent.com/72472530/147272939-f7fcfea7-786d-49b6-aebd-dd9a7c6bad76.png)

Será validado que apenas um `admnistrador` ou o `usuário logado` deve ser o mesmo que criou o usuário que podem editar os dados.

*Exemplo de requisição*

![5 - privilegio de user](https://user-images.githubusercontent.com/72472530/147273300-37971535-8f86-4078-928c-e875e25e53c1.png)


Será validado que o `id` deve **corresponder a um usuário cadastrado**, caso contrário a API será retornará um erro.

*Exemplo de requisição*

![5 - valida se o usuario existe](https://user-images.githubusercontent.com/72472530/147273031-44dc31be-4642-428d-be5e-d178b8fe9484.png)

### 6 - A aplicação tem o endpoint `DELETE /users/:id`

Esse endpoint é responsável por **deletar** um usuário cadastrado no banco de dados.

*Exemplo de requisição*

![6 - deleta um usuario](https://user-images.githubusercontent.com/72472530/147273338-59d98510-af49-4c9b-b2af-dd24750cb70b.png)

Será validado que o `id` deve **corresponder a um usuário cadastrado**, caso contrário a API retornará um erro.

*Exemplo de requisição*

![6 - verifica se o user existe](https://user-images.githubusercontent.com/72472530/147273361-b1990302-8a22-410f-b2ea-78883a2187c5.png)

### 7 - A aplicação tem o endpoint `POST /products`

Esse endpoint é responsável por **adicionar** um produto no banco de dados

*Exemplo de requisição*

![7 - cadastra produto](https://user-images.githubusercontent.com/72472530/147273422-eccc1b56-1c64-4b3b-8ab7-1d50d54e3b8a.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![7 - valida tipos de usuario](https://user-images.githubusercontent.com/72472530/147273505-377ece23-64ac-4e56-8fac-03d8d9b0031c.png)

Será validado que os campos`name`, `type` e `price` não devem ser nulos, caso contrário a API retornará um erro.

*Exemplo de requisição*

![7 - valida que os campos nao podem estar vazios](https://user-images.githubusercontent.com/72472530/147273459-6dab0774-7e7e-47f6-b183-e3200d8f8132.png)

Será validado que o campo `price` deve ser um **tipo numero**

*Exemplo de requisição*

![7 - valida type number](https://user-images.githubusercontent.com/72472530/147273575-c25e0818-e006-4cf1-b870-5bc0cfd0c031.png)

### 8 - A aplicação tem o endpoint `PUT /products/:id/image`

Esse endpoint é responsável por **adicionar** uma nova imagem ao banco de dados

*Exemplo de requisição*

![8 - adiciona produto](https://user-images.githubusercontent.com/72472530/147273594-4e379ad1-bbad-461c-a502-991ace929c46.png)

### 9 - A aplicação tem o endpoint `GET /products`

Esse endpoint é responsável por **listar** todos os produtos cadastrados no banco de dados.

*Exemplo de requisição*

![9 - lista produtos](https://user-images.githubusercontent.com/72472530/147273757-0f9e7325-2908-4c78-adaa-1744a17cfc7a.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![9 - verifica usuario](https://user-images.githubusercontent.com/72472530/147273767-275ecab8-f9a5-472c-9ef1-8641c2480576.png)

### 10 - A aplicação tem o endpoint `GET /products/:id`

Esse endpoint é responsável por **listar** um produto cadastrado no banco de dados.

*Exemplo de requisição*

![10 - lista produto](https://user-images.githubusercontent.com/72472530/147273785-fd67875c-d5ca-4d0b-a62a-be305cf2d2c0.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![10 - verifica usuarios](https://user-images.githubusercontent.com/72472530/147273805-7896420b-d745-4bc3-9a4d-dbecc72389f9.png)

Será validado que o `id` deve **corresponder a um produto cadastrado**, caso contrário a API retornará um erro. 

*Exemplo de requisição*

![10 - verifica se produto existe](https://user-images.githubusercontent.com/72472530/147273821-a2179a3f-28a2-4fab-b616-08ec7c077443.png)

### 11 - A aplicação tem o endpoint `PUT /products/:id`

Esse endpoint é responsável por **editar** um produto cadastrado no banco de dados.

*Exemplo de requisição*

![11 - edita produto](https://user-images.githubusercontent.com/72472530/147273847-4befb267-53b3-4c5b-82d2-e354a69dad06.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![11 - verifica usuario](https://user-images.githubusercontent.com/72472530/147273971-f4a5b5cf-218e-4566-af0b-a7bded8419b9.png)

Será validado que o `id` deve **corresponder a um produto cadastrado**, caso contrário a API retornará um erro. 

*Exemplo de requisição*

![11 - verifica produto](https://user-images.githubusercontent.com/72472530/147273868-d0c8e5f6-2a22-4db4-8e71-e712cd85fdab.png)

### 12 - A aplicação tem o endpoint `DELETE /products/:id`

Esse endpoint é responsável por **deletar** um produto cadastrado no banco de dados.

*Exemplo de requisição*

![12 - deleta produto](https://user-images.githubusercontent.com/72472530/147273980-ee930fc2-51dd-4316-a03f-4360d94e57b1.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![12 - verifica usuario](https://user-images.githubusercontent.com/72472530/147273999-fe1b6505-9740-41f7-9899-0f89f510de4b.png)

Será validado que o `id` deve **corresponder a um produto cadastrado**, caso contrário a API retornará um erro. 

*Exemplo de requisição*

![12 - verifica produto](https://user-images.githubusercontent.com/72472530/147274057-d71a8fc1-5a22-41ff-a6d7-77bef7284731.png)


### 13 - A aplicação tem o endpoint `POST /sales`

Esse endpoint é responsável por **criar** uma venda no banco de dados.

*Exemplo de requisição*

![13 - cria venda](https://user-images.githubusercontent.com/72472530/147274080-40752a05-49ca-407f-9acb-594b833c16e6.png)

Será validado que o campo `userId` deve **corresponder a um usuário cadastrado** no banco de dados, caso contrário a API retornará um erro. 

*Exemplo de requisição*

![13 - verifica id usuario](https://user-images.githubusercontent.com/72472530/147274099-5dee1369-867f-43d9-8d0d-235ed244baa5.png)

### 14 - A aplicação tem o endpoint `GET /sales`

Esse endpoint é responsável por **listar** todas as vendas cadastradas no banco de dados.

*Exemplo de requisição*

![14 - lista vendas](https://user-images.githubusercontent.com/72472530/147274126-e8cac77a-abdd-413b-beb0-8f31e49c1c84.png)

Será validado que o usuário logado deve ser um `administrator` ou `seller`, caso seja um cliente o erro será disparado

*Exemplo de requisição*

![14 - verifica usuario](https://user-images.githubusercontent.com/72472530/147274137-7a8abad4-ff04-4abd-9afc-470d82dcc48c.png)

### 15 - A aplicação tem o endpoint `GET /sales/:id`


Esse endpoint é responsável por **listar** uma única venda cadastrada no banco de dados.

*Exemplo de requisição*

![15 - listar venda](https://user-images.githubusercontent.com/72472530/147274162-ce413695-3739-4cd6-a744-5ac94875a9f9.png)

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
