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
│   ├── controllers/          # Controladores das rotas
│   │   ├── player-controller.ts
│   │   └── clubs-controller.ts
│   ├── services/            # Lógica de negócio
│   │   ├── service-player.ts
│   │   └── service-clubs.ts
│   ├── models/              # Modelos de dados
│   │   └── statistics-player-model.ts
│   ├── server.ts            # servidor da aplicação
│   ├── app.ts               # Ponto de entrada da aplicação
│   └── routes.ts            # Endpoints da aplicação
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
git clone <url-do-repositorio>
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
4.Ou compile e execute em produção
```bash
npm run build
npm start
```
## 🌐 Endpoints da API

Jogadores
Método	Endpoint	Descrição
GET	/players	Retorna todos os jogadores
GET	/players/:id	Retorna um jogador específico
POST	/players	Cria um novo jogador
PATCH	/players/:id	Atualiza um jogador existente
DELETE	/players/:id	Remove um jogador

Clubes
Método	Endpoint	Descrição
GET	   /clubes	  Retorna todos os clubes disponíveis
## 📋 Exemplos de Uso
Obter todos os jogadores
```bash
curl http://localhost:3333/players
```
Obter jogador por ID
```bash
curl http://localhost:3333/players/1
```
Criar novo jogador
```bash
curl -X POST http://localhost:3333/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Novo Jogador",
    "club": "Novo Clube",
    "nacionality": "Brasil",
    "position": "Forward",
    "statistic": {
      "Overall": 85,
      "Pace": 80,
      "Shooting": 75,
      "Passing": 82,
      "Dribbling": 88,
      "Defending": 40,
      "Physical": 70
    }
  }'
```
Atualizar jogador
```bash
curl -X PATCH http://localhost:3333/players/1 \
  -H "Content-Type: application/json" \
  -d '{
    "statistic": {
      "Overall": 86
    }
  }'
```
Deletar jogador
```bash
curl -X DELETE http://localhost:3333/players/1
```
Obter clubes
```bash
curl http://localhost:3333/clubes
```
## 📊 Tipos de Dados
Jogador
```typescript
interface Player {
  id: number;
  name: string;
  club: string;
  nacionality: string;
  position: string;
  statistic: PlayerStatistics;
}

interface PlayerStatistics {
  Overall: number;
  Pace: number;
  Shooting: number;
  Passing: number;
  Dribbling: number;
  Defending: number;
  Physical: number;
}
```

## 📜 Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev          # Executa com hot-reload

# Build
npm run build        # Compila TypeScript
npm start            # Executa versão compilada

# TypeScript
npm run tsc          # Compilação única
npm run tsc:watch    # Compilação com watch
```
## 🤝 Contribuição
1.Faça um fork do projeto

2.Crie uma branch para sua feature (``git checkout -b feature/AmazingFeature``)

3.Commit suas mudanças (``git commit -m 'Add some AmazingFeature``')

4.Push para a branch (``git push origin feature/AmazingFeature``)

5.Abra um Pull Request