# 📊 Análise Estatística de Algoritmos de Ordenação

Este projeto realiza uma análise comparativa e estatística do desempenho de quatro algoritmos clássicos de ordenação, avaliando seu **tempo de execução** e **uso de memória** em diferentes cenários de dados. O objetivo é testar formalmente se a escolha do algoritmo impacta significativamente essas métricas.

Este trabalho foi desenvolvido como parte da disciplina de **Estruturas de Dados** da **Universidade Federal do Rio Grande do Norte (UFRN)**.

---

## 🚀 Algoritmos Analisados

- **Bubble Sort**  
  Algoritmo simples que percorre repetidamente a lista, compara elementos adjacentes e os troca quando estão fora de ordem.

- **Insertion Sort**  
  Constrói a lista ordenada final inserindo um item por vez em sua posição correta dentro da sublista ordenada.

- **Quick Sort**  
  Algoritmo eficiente do tipo "dividir para conquistar", que escolhe um pivô e particiona o array ao seu redor.

- **Merge Sort**  
  Outro algoritmo "dividir para conquistar" que divide o array em duas partes, ordena recursivamente e mescla os resultados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **JavaScript (ESM)** – Linguagem utilizada na implementação dos algoritmos e scripts de automação.

---

## 📂 Estrutura do Projeto

/<br> 
├── data/ # Conjuntos de dados de entrada<br> 
├── results/ # Resultados gerados (JSON, gráficos e relatório final) <br> 
├── src/ # Código-fonte <br> 
│   ├── algorithms/ # Implementações dos algoritmos de ordenação <br> 
│   ├── utils/ # Funções auxiliares (análise, arquivos, etc.) <br> 
│   ├── 1_prepareData.js # Geração dos dados de teste <br> 
│   ├── 2_runExperiments.js# Execução dos experimentos <br> 
│   └── 3_generateReport.js# Geração do relatório final <br> 
├── package.json # Configuração do projeto Node.js <br> 
└── README.md # Este arquivo <br> 


---

## ▶️ Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/LuiscffBRA/ED_ORDENACAO.git
cd seu-repositorio

2. Instalar Dependências

    ℹ️ Este projeto não possui dependências externas, mas o comando abaixo prepara o ambiente:

npm install

3. Preparar os Conjuntos de Dados

Gera os arquivos sequence-cresc.txt e sequence-desc.txt a partir de data/sequence.txt.

npm run prepare

4. Executar os Experimentos

Executa os quatro algoritmos sobre três conjuntos de dados, repetindo 10 vezes cada. Os dados brutos de tempo e memória serão salvos em results/collected_data.json.

    ⚠️ Esta etapa pode demorar alguns minutos, principalmente devido ao Bubble Sort.

npm start

5. Gerar o Relatório Final

Processa os dados coletados e gera um relatório de análise estatística em Markdown.

npm run report

O resultado estará disponível em:
📄 results/summary_report.md
