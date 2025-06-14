📊 Análise Estatística de Algoritmos de Ordenação

Este projeto realiza uma análise comparativa e estatística do desempenho de quatro algoritmos clássicos de ordenação, avaliando seu tempo de execução e uso de memória em diferentes cenários de dados. O objetivo é testar formalmente se a escolha do algoritmo impacta significativamente essas métricas.

Este trabalho foi desenvolvido como parte da disciplina de Estruturas de Dados da Universidade Federal do Rio Grande do Norte (UFRN).
🚀 Algoritmos Analisados

    Bubble Sort
    Algoritmo simples que percorre repetidamente a lista, compara elementos adjacentes e os troca quando estão fora de ordem.

    Insertion Sort
    Constrói a lista ordenada final inserindo um item por vez em sua posição correta dentro da sublista ordenada.

    Quick Sort
    Algoritmo eficiente do tipo "dividir para conquistar", que escolhe um pivô e particiona o array ao seu redor.

    Merge Sort
    Outro algoritmo "dividir para conquistar" que divide o array em duas partes, ordena recursivamente e mescla os resultados.

🛠️ Tecnologias Utilizadas

    Node.js – Ambiente de execução JavaScript.

    JavaScript (ESM) – Linguagem utilizada na implementação dos algoritmos e scripts de automação.

📂 Estrutura do Projeto

/
├── data/                  # Conjuntos de dados de entrada
├── results/               # Resultados gerados (JSON, gráficos e relatório final)
├── src/                   # Código-fonte
│   ├── algorithms/        # Implementações dos algoritmos de ordenação
│   ├── utils/             # Funções auxiliares (análise, arquivos, etc.)
│   ├── 1_prepareData.js   # Geração dos dados de teste
│   ├── 2_runExperiments.js# Execução dos experimentos
│   └── 3_generateReport.js# Geração do relatório final
├── package.json           # Configuração do projeto Node.js
└── README.md              # Este arquivo

▶️ Como Executar o Projeto
1. Clonar o Repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instalar Dependências

npm install

    ℹ️ O projeto não possui dependências externas, mas este comando prepara o ambiente.

3. Preparar os Conjuntos de Dados

npm run prepare

Gera os arquivos sequence-cresc.txt e sequence-desc.txt a partir de data/sequence.txt.
4. Executar os Experimentos

npm start

Executa os quatro algoritmos sobre três conjuntos de dados, 10 vezes cada. Resultados salvos em results/collected_data.json.

    ⚠️ Pode demorar alguns minutos, especialmente por conta do Bubble Sort.

5. Gerar o Relatório Final

npm run report

Processa os dados e gera o relatório com médias e desvios padrão em results/summary_report.md.
