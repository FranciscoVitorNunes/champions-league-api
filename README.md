# 🏆 Champions League API
Uma API RESTful para gerenciamento de jogadores de futebol inspirada na Champions League, desenvolvida em TypeScript com Express.js.


## ⚙️ Funcionalidades
✅ CRUD completo de jogadores de futebol

✅ Listagem de clubes disponíveis

✅ Estatísticas detalhadas dos jogadores

✅ API RESTful com endpoints bem definidos

✅ Validação de dados e tratamento de erros

✅ Tipagem estática com TypeScript

## 🛠 Tecnologias Utilizadas
- Node.js - Ambiente de execução JavaScript

- Express.js - Framework web para Node.js

- TypeScript - Superset tipado do JavaScript


## 📁 Estrutura do Projeto
``` text
champions-league-api/
├── src/
│   ├── controllers/         # Controladores das rotas
│   │   ├── player-controller.ts
│   │   └── clubs-controller.ts
│   ├── data/                # Dados
│   │   └── clubs.json
│   ├── models/              # Modelos de dados
│   │   ├── club-model.ts
│   │   ├── http-response-model.ts
│   │   ├── player-model.ts
│   │   └── statistics-player-model.ts
│   ├── repositories/        # Repositórios de dados
│   │   ├── clubsclubs-repository.ts
│   │   └── player-repository.ts
│   ├── services/            # Lógica de negócio
│   │   ├── service-clubs.ts
│   │   └── service-player.ts
│   ├── utils/               # Status code
│   │   └── http-helper.ts
│   ├── app.ts               # Ponto de entrada da aplicação
│   ├── routes.ts            # Endpoints da aplicação
│   └── server.ts            # servidor da aplicação
├── package.json
├── tsconfig.json
└── README.md
```
## 🚀 Instalação e Configuração
### Pré-requisitos
- Node.js (versão 16 ou superior)

- npm ou yarn

### Passos de Instalação
1.Clone o repositório
```bash
git clone https://github.com/FranciscoVitorNunes/champions-league-api.git
cd champions-league-api
```
2.Instale as dependências
```bash
npm install
```
3.Execute em modo desenvolvimento
```bash
npm run start:dev
```
4.Ou execute em modo assistido
```bash
npm run start:watch
```
## 🌐 Endpoints da API

Jogadores
Método	Endpoint	Descrição
- GET	/players	Retorna todos os jogadores
- GET	/players/:id	Retorna um jogador específico
- POST	/players	Cria um novo jogador
- PATCH	/players/:id	Atualiza um jogador existente
- DELETE	/players/:id	Remove um jogador

Clubes
Método	Endpoint	Descrição
- GET	   /clubes	  Retorna todos os clubes disponíveis


## 🤝 Contribuição
1.Faça um fork do projeto

2.Crie uma branch para sua feature (``git checkout -b feature/AmazingFeature``)

3.Commit suas mudanças (``git commit -m 'Add some AmazingFeature``')

4.Push para a branch (``git push origin feature/AmazingFeature``)

5.Abra um Pull Request