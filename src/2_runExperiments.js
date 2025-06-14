import fs from 'fs';
import { performance } from 'perf_hooks';
import { readDataFile } from './utils/fileHandler.js';
import { bubbleSort } from './algorithms/bubbleSort.js';
import { insertionSort } from './algorithms/insertionSort.js';
import { quickSort } from './algorithms/quickSort.js';
import { mergeSort } from './algorithms/mergeSort.js';

const ALGORITHMS = {
  'Bubble Sort': bubbleSort,
  'Insertion Sort': insertionSort,
  'Quick Sort': quickSort,
  'Merge Sort': mergeSort, // Incluído para a expansão
};

const DATA_FILES = {
  'Aleatório': 'sequence.txt',
  'Crescente': 'sequence-cresc.txt',
  'Decrescente': 'sequence-desc.txt',
};

const REPETITIONS = 10; // Conforme sugerido no trabalho 
const allResults = [];

console.log(`Iniciando experimentos. ${REPETITIONS} repetições para cada cenário.`);

for (const dataLabel in DATA_FILES) {
  const fileName = DATA_FILES[dataLabel];
  const data = readDataFile(fileName);
  
  for (const algoName in ALGORITHMS) {
    console.log(`\nTestando: ${algoName} com dados em ordem ${dataLabel}...`);
    
    for (let i = 0; i < REPETITIONS; i++) {
      const dataCopy = [...data]; // Sempre usar uma cópia nova
      
      // Medição de tempo
      const startTime = performance.now();
      ALGORITHMS[algoName](dataCopy);
      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Medição de memória (pico durante a execução)
      const memoryUsage = process.memoryUsage().heapUsed / 1024; // Em KB

      allResults.push({
        algorithm: algoName,
        dataType: dataLabel,
        repetition: i + 1,
        time: executionTime, // Em ms
        memory: memoryUsage, // Em KB
      });

      process.stdout.write(`Repetição ${i + 1}/${REPETITIONS} concluída.\r`);
    }
  }
}

// Salvar resultados brutos
fs.writeFileSync('results/collected_data.json', JSON.stringify(allResults, null, 2));

console.log('\n\nTodos os experimentos foram concluídos!');
console.log('Dados brutos salvos em results/collected_data.json');