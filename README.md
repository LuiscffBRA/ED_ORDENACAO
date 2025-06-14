Análise Estatística de Algoritmos de Ordenação

Este projeto realiza uma análise de desempenho comparativa e estatística de quatro algoritmos de ordenação clássicos, avaliando seu tempo de execução e uso de memória em diferentes cenários de dados. O objetivo é testar formalmente se a escolha do algoritmo afeta significativamente as métricas de desempenho.

Este trabalho foi desenvolvido como parte da disciplina de Estruturas de Dados da Universidade Federal do Rio Grande do Norte (UFRN).
🚀 Algoritmos Analisados

O desempenho dos seguintes algoritmos foi analisado:

    Bubble Sort: Um algoritmo simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.

Insertion Sort: Constrói a matriz ordenada final um item de cada vez, inserindo cada novo elemento em sua posição correta dentro da sub-lista já ordenada.
Quick Sort: Um algoritmo eficiente do tipo "dividir para conquistar" que escolhe um "pivô" e particiona a matriz em torno dele.
Merge Sort: Outro algoritmo de "dividir para conquistar" que divide a matriz em duas metades, ordena-as recursivamente e depois as mescla.

🛠️ Tecnologias Utilizadas

    Node.js: Ambiente de execução para o JavaScript.
    JavaScript (ESM): Linguagem utilizada para a implementação dos algoritmos e scripts de automação.

📂 Estrutura do Projeto

O repositório está organizado da seguinte forma:

/
|-- data/                 # Contém os conjuntos de dados de entrada
|-- results/              # Armazena os resultados gerados (JSON e relatório final)
|-- src/                  # Contém todo o código-fonte
|   |-- algorithms/       # Implementações dos algoritmos de ordenação
|   |-- utils/            # Funções auxiliares (manipulação de arquivos, análise)
|   |-- 1_prepareData.js  # Script para gerar os dados ordenados
|   |-- 2_runExperiments.js # Script para executar os testes de desempenho
|   |-- 3_generateReport.js # Script para gerar o relatório de análise
|-- package.json          # Definições e scripts do projeto
|-- README.md             # Este arquivo

▶️ Como Executar o Projeto

Para replicar o experimento, siga os passos abaixo. É necessário ter o Node.js instalado.
1. Clonar o Repositório
Bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instalar Dependências

Este projeto não possui dependências externas, mas este comando prepara o ambiente:
Bash

npm install

3. Preparar os Conjuntos de Dados

Este comando irá ler o arquivo data/sequence.txt e gerar as versões ordenada (sequence-cresc.txt) e inversamente ordenada (sequence-desc.txt).

Bash

npm run prepare

4. Executar os Experimentos

Este é o passo principal. O script executará cada um dos quatro algoritmos nos três conjuntos de dados. Cada cenário é executado 10 vezes para garantir a consistência estatística. Os dados brutos de tempo e memória serão salvos em results/collected_data.json.

Aviso: Esta etapa pode demorar alguns minutos, principalmente devido ao Bubble Sort.
Bash

npm start

5. Gerar o Relatório Final

Após a coleta de dados, este comando irá processar o arquivo results/collected_data.json, calcular as médias e desvios-padrão e gerar um relatório completo da análise em formato Markdown.

Bash

npm run report

O relatório final estará disponível em results/summary_report.md.