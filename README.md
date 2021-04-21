# next-level-week-5

## Aula 01
* Ferramentas utilizadas: Insomnia, VSCode, NodeJS, TS
* O que é o node?
* O que é o typescript?
* Pq usar o typescript?
* O que é o `package.json`?
* O que é o `express`?
  * É um mini framework que vai auxiliar na criação das rotas e também ajuda a subir o servidor
* Quais os tipos de requisição HTTP?
  * GET, POST, ...

/**
 * GET = Used for searches
 * POST = Used for creations
 * PUT = Used to changes
 * DELETE = Used for deletions
 * PATCH = Used to change one specific information
 */

Iniciar projeto `yarn init -y`
Instalar dependencias `yarn add ts-node-dev -D`
Subir o servidor `yarn dev`

```bash
node -v
npm -v
brew install yarn
open ~/.zshrc
cd nlw5
yarn --version
yarn init -y
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D
yarn dev
```
Secret code: missaoespacial

## Aula 02 - Iniciando com o Banco de Dados

* O que é o TypeORM?
* O que é o SQLite?
  * banco de dados leve que roda em memória

instalar dependencias `yarn add typeorm reflect-metadata sqlite3`

* O que são migrations?
  * Gera um histórico sobre qualquer alteração na estrutura do banco de dados, toda configuracao passa pelas migrations, ela auxilia no gerenciamento do banco de dados com o node

Criar migration settings `yarn typeorm migration:create -n CreateSettings`

* Para visualizar o banco SQLite temos 2 opções:
  * Extensão SQLite no VSCode
  * Beekeeper Studio

Adicionar biblioteca uuid para gerenciar os uuid's do projeto, estamos trazendo essa responsabilidade para o projeto, para que ela não fique no banco de dados, não nos deixando "presos" em um banco de dados específico, vamos também instalar as tipagens como dependencia de desenvolvimento.
```bash
yarn add uuid
yarn add @types/uuid -D
```

* O que são repositórios?
  * Uma estrutura de uma classe que será responsável pela manipulação e representação de dados e a comunicacao entre as entidades e o banco de dados 
* O que são controllers?
  * São responsáveis por pegar as informações que estão vindo das rotas e inserir no nosso repositório

Secret code: embuscadoproximonivel