# 📊 Smart Analytics Dashboard

Dashboard interativo de análise de vendas desenvolvido com Python, Flask, Pandas e Chart.js.

O projeto transforma dados de vendas em indicadores visuais, permitindo acompanhar receita, volume de pedidos, ticket médio, clientes, desempenho por categoria, região e evolução mensal.

---

## ✨ Funcionalidades

- Visualização de KPIs
- Receita total
- Total de vendas
- Ticket médio
- Quantidade de clientes
- Análise por categoria
- Análise por região
- Evolução mensal
- Gráfico de barras
- Gráfico de rosca
- Gráfico de linha
- Filtros interativos por categoria
- Filtros interativos por região
- Atualização dinâmica dos indicadores
- Atualização dinâmica dos gráficos
- Interface responsiva em dark mode

---

## 📌 KPIs exibidos

O dashboard apresenta quatro indicadores principais:

- 💰 Receita Total
- 🛒 Total de Vendas
- 📈 Ticket Médio
- 👥 Total de Clientes

Esses valores são calculados dinamicamente a partir dos dados carregados pelo projeto.

---

## 🔎 Filtros interativos

O usuário pode filtrar os dados por:

- Categoria
- Região

Ao aplicar um filtro, o dashboard atualiza automaticamente:

- KPIs
- Listas de desempenho
- Gráfico de categorias
- Gráfico de regiões
- Evolução mensal

Também existe a opção de limpar os filtros e retornar à visão completa dos dados.

---

## 📊 Visualizações

### Vendas por Categoria

Exibe a distribuição das vendas entre categorias como:

- Tecnologia
- Casa
- Moda
- Beleza

### Vendas por Região

Permite comparar o desempenho das vendas entre diferentes regiões do Brasil.

### Evolução das Vendas

Apresenta a receita ao longo dos meses em um gráfico de linha.

---

## 🧠 Como funciona?

Os dados são armazenados em um arquivo CSV e processados utilizando Pandas.

O fluxo da aplicação funciona assim:

```text
sales_data.csv
      ↓
Pandas
      ↓
Python
      ↓
Análise dos dados
      ↓
Flask
      ↓
HTML + JavaScript
      ↓
Chart.js
      ↓
Dashboard interativo
```

O backend realiza os cálculos iniciais e envia os dados para a interface.

No frontend, JavaScript e Chart.js são utilizados para gerar e atualizar as visualizações de forma dinâmica.

---

## 🛠️ Tecnologias utilizadas

- Python
- Flask
- Pandas
- HTML5
- CSS3
- JavaScript
- Chart.js
- CSV
- Git
- GitHub

---

## 📂 Estrutura do projeto

```text
smart-analytics-dashboard/
│
├── data/
│   └── sales_data.csv
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── analysis.py
├── app.py
├── database.py
├── requirements.txt
├── .gitignore
└── README.md
```

> O ambiente virtual `.venv` não é versionado no repositório.

---

## 📁 Dataset

O projeto utiliza um conjunto de dados fictício de vendas criado exclusivamente para fins educacionais e de portfólio.

O arquivo contém informações como:

- Data da venda
- Região
- Categoria
- Produto
- Cliente
- Valor da venda

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone <URL-DO-REPOSITORIO>
```

Entre na pasta:

```bash
cd smart-analytics-dashboard
```

### 2. Crie um ambiente virtual

```bash
python -m venv .venv
```

### 3. Ative o ambiente virtual

No Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 4. Instale as dependências

```bash
python -m pip install -r requirements.txt
```

### 5. Execute a aplicação

```bash
python app.py
```

Acesse no navegador:

```text
http://127.0.0.1:5000
```

---

## 📈 Processamento dos dados

O arquivo `analysis.py` é responsável pelo processamento dos dados utilizando Pandas.

Entre as principais análises realizadas estão:

```text
Cálculo de receita total
Cálculo de ticket médio
Contagem de pedidos
Contagem de clientes únicos
Agrupamento por categoria
Agrupamento por região
Agrupamento mensal
```

---

## 💡 Objetivo do projeto

O objetivo deste projeto é demonstrar a aplicação prática de análise de dados em uma solução web interativa.

Além da análise, o projeto também explora a integração entre backend e frontend, permitindo transformar dados brutos em informações visuais que podem auxiliar na tomada de decisão.

---

## 🔮 Próximas melhorias

- Integração com banco de dados SQL
- Upload de datasets pelo usuário
- Filtro por período
- Exportação de relatórios
- Comparação entre períodos
- Novos KPIs
- Autenticação de usuários
- Deploy em ambiente online

---

## 👩‍💻 Autora

**Jenneffer Souza Bolonheze**

Estudante de Sistemas de Informação, com interesse em análise de dados, Inteligência Artificial, automação e desenvolvimento de soluções tecnológicas.