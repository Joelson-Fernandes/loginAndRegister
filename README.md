<h1 align="center">Login e registro de usuarios</h1>

> Sistema de login e registro de usuarios. front end feito com React e backend com Node.JS.
Sistema conta com chaves token <a href="https://github.com/auth0/node-jsonwebtoken#readme">jsonwebtoken</a>,
persistência de dados em localStorage <a href="https://github.com/ryanwillis/reduxjs-toolkit-persist">Redux Toolkit Persist</a>.

<div align="center">
 <h3>Tecnologias utilizadas:</h3>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EsLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

</div>

## 🚀 Configuração do projeto

Adicione um arquivo `.env` e configure. Ex:
```
CONNECTDATABASE='mongodb+srv://<usename>:<password>@cluster0.1wjlnzs.mongodb.net/?retryWrites=true&w=majority'

TOKEN_SECRET=sua secret key aqui
TOKEN_EXPIRATION=7d
```

Execute o comando no diretório raiz:
```
npm install
npm start
```
Back-end devera estar rodando em <a href="http://localhost:3001">http://localhost:3001</a>

cd frontend
```
npm install
npm start
```
Front-end devera estar rodando em <a href="http://localhost:3000">http://localhost:3000</a>
