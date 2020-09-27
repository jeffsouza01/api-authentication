<h1 align="center"> API - Authentication </h1>

### Sobre a aplicação
Nesta aplicação temos o cadastro e autenticação de usuários que são persistidos em MongoDB.
Possuindo token de acesso em JWT com tempo de expiração de 30 minutos.
Permitido apenas um cadastro de e-mail por usuário.


#### Técnologias utilizadas:
- [ ] NodeJS
- [ ] Express
- [ ] bcryptjs
- [ ] jsonwebtoken
- [ ] Mongoose

### Rotas:

- **`POST /sign_up`**
Esta rota deve receber `nome`, `email`, `senha` e um array de `telefone` com `ddd` e `numero` para cadastro de um novo usuário.

_exemplo de retorno_
```json
{
  "usuario": {
    "_id": "5f71034dabde7173294acfbf",
    "nome": "Robo2 ",
    "email": "robo2@gmail.com",
    "telefone": [
      {
        "_id": "5f71034dabde7173294acfc0",
        "numero": "412356789",
        "ddd": "11"
      }
    ],
    "data_criacao": "2020-09-27T21:25:33.824Z",
    "data_atualizacao": "2020-09-27T21:25:33.824Z",
    "ultimo_login": "2020-09-27T21:25:33.824Z",
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsiaWQiOiI1ZjcxMDM0ZGFiZGU3MTczMjk0YWNmYmYifSwiaWF0IjoxNjAxMjQxOTM0LCJleHAiOjE2MDEyNDM3MzR9.dOafMOJRJ5NENVKP71ylFvgSRpjv6kGR6-ZzC1vJfac"
}
```


- **`POST /sign_in`**
Esta rota deve receber `email` e `senha` para autenticação do usuário cadastrado no banco.

_exemplo de retorno_
```json
{
  "usuario": {
    "_id": "5f71034dabde7173294acfbf",
    "nome": "Robo2 ",
    "email": "robo2@gmail.com",
    "telefone": [
      {
        "_id": "5f71034dabde7173294acfc0",
        "numero": "412356789",
        "ddd": "11"
      }
    ],
    "data_criacao": "2020-09-27T21:25:33.824Z",
    "data_atualizacao": "2020-09-27T21:25:33.824Z",
    "ultimo_login": "2020-09-27T21:25:33.824Z",
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOnsiaWQiOiI1ZjcxMDM0ZGFiZGU3MTczMjk0YWNmYmYifSwiaWF0IjoxNjAxMjQzNzU5LCJleHAiOjE2MDEyNDU1NTl9.rtK9JvUrpSp02bOIx8E6y6mKxyx0Lf2YIuKfTsNwt-A"
}
```
### Rodando a aplicação local

```bash
# Clone este repositório
$ git clone <https://github.com/jeffsouza01/api-authentication.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-authentication.git

# Instale as dependências
$ npm install
ou
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server
ou
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```


### Aplicação

- Link da Aplicação:
[API - Authentication](https://app-authentication-nodejs.herokuapp.com/)


**_Author:_** _Jefferson da Silva_
