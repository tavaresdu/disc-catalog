# Catálogo de Discos

## Requisitos
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (versão utilizada: 10.16.2)
- [npm](https://www.npmjs.com/get-npm) (versão utilizada: 6.10.3)
- [MySQL](https://dev.mysql.com/downloads/mysql/) (versão utilizada: 8.0.17)

## Setup
Baixe o projeto e instale as dependências:
```bash
git clone https://github.com/tavaresdu/disc-catalog.git
cd disc-catalog
npm install
cd api
npm install
```
Edite o arquivo *api/config/config.json* com as informações do seu banco de dados MySQL.
```json
{
    "development": {
        "username": "NOME_DE_USUARIO",
        "password": "SENHA",
        "database": "NOME_DA_BASE_DE_DADOS",
        "host": "ENDEREÇO_DO_BANCO",
        "dialect": "mysql"
    }
}
```
Na pasta *api*, utilize o sequinte comando para criar as tabelas no banco de dados:
```bash
npx sequelize db:migrate
```

## Start
Inicie a API entrando na pasta *api* e utilize o comando:
```bash
npx nodemon app
```
Na pasta raiz do projeto, inicie a interface com o comando:
```
npm run serve
```
Depois de iniciar os dois, é só acessar http://localhost:8080 para utilizar o sistema. 🙂