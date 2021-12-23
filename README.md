# Boas vindas ao projeto API-loja-de-games



# Boas vindas ao projeto Species-API

# Sumário

- [Comentários sobre o projeto](#comentários-sobre-o-projeto)
- [O que é a Api loja de games?](#o-que-é-a-api-loja-de-game)
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

- Cadastrar uma nova espécie
- Adicionar imagem da nova espécie
- Listar todas as espécies
- Listar apenas uma espécie
- Editar uma espécie

*Obs: Não achei que fazia sentido criar um método para deletar uma espécie, pois mesmo que sua espécie tenha sido extinta ainda seria válido deixar seu registro e no caso de erro durante o cadastro de uma espécie é possível editar.*

---

# Documentação API

### 1 - A aplicação tem o endpoint `POST /specie`


Esse endpoint é responsável pelo cadastro de uma nova espécie
Os campos `reino, filo, classe, ordem, subOrdem, familia, genero, especie, subEspecie, nome` são esperados na requisição

*Exemplo de requisição*

![1 - sucesso](https://user-images.githubusercontent.com/72472530/146947897-e7c8434d-7fde-46cd-934d-cc6a520bb55a.png)

Será validado que os campos `reino, filo, classe, ordem,	familia, genero, especie e nome` são **obrigatórios**


*No exemplo abaixo fiz a requisição sem o campo "name", porém o mesmo erro iria se repetir se algum dos campos obrigatórios não fossem enviados na requisição*

![1 - caso de erro](https://user-images.githubusercontent.com/72472530/146947938-df82ac2d-024e-40d4-ae35-39d1c8525e34.png)

### 2 - A aplicação tem o endpoint `PATCH /specie/:id/image`
Esse endpoint é responsável por adicionar uma nova imagem a uma espécie previamente cadastrada.

O campo **id** deve corresponder ao id da espécie cadastrada

*exemplo de requisição*

![2 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948147-e453d7ea-7ed1-416d-a829-174156145bf7.png)

Ao clicar na url a imagem será carregada

![2 - caso de erro](https://user-images.githubusercontent.com/72472530/146948187-4ca5c39d-aad8-46d9-95ed-37e1c84da763.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![2 - id invalido](https://user-images.githubusercontent.com/72472530/146543714-ec9d0b08-dc4e-4e27-aa40-4258b672df7b.png)

### 3 - A aplicação tem o endpoint `GET /specie`

Esse endpoint é responsável por listar todas as espécies cadastradas no banco de dados.

*exemplo de requisição*

![3 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948252-9bb74846-b1c2-494f-8953-3ef6deb80c7b.png)

### 4 - A aplicação tem o endpoint `GET /specie/:id`

Esse endpoint é responsável por listar uma espécie através do **id**

*exemplo de requisição*

![4 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948303-5ba1b785-883f-41a0-bcd6-002f74b9e6c4.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![4 - caso de erro](https://user-images.githubusercontent.com/72472530/146948337-3be68a5f-55ca-41bf-9305-7abee7d7b7d1.png)

### 5 - A aplicação tem o endpoint `PATCH /specie/:id`

Esse endpoint é responsável por editar dados de uma espécie previamente cadastrada

Nessa requisição devem ser enviados dados através do **id** que corresponde a uma espécie preciamente cadastrada, e no corpo da requisição devem ser enviados o dado a ser alterado

*exemplo de requisição*

![5 - caso de sucesso](https://user-images.githubusercontent.com/72472530/146948377-44127e98-31b6-4cb7-adc5-fa8cf4bd37ec.png)

Será validado que o campo id deve corresponder a alguma espécie previamente cadastrada no banco de dados, caso esse campo esteja errado será disparado um erro.

*exemplo de requisição*

![5 - caso de erro](https://user-images.githubusercontent.com/72472530/146948463-f8cc718a-8f5d-4190-b10e-b0da3c74bc79.png)

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
