import { readDataFile, writeDataFile } from './utils/fileHandler.js';
import { quickSort } from './algorithms/quickSort.js';

console.log('Iniciando preparação dos conjuntos de dados...');

// Ler dados aleatórios
const randomData = readDataFile('sequence.txt');
console.log(`Lidos ${randomData.length} números do arquivo sequence.txt.`);

// Criar e salvar dados em ordem crescente
const ascendingData = quickSort([...randomData]); // Usar uma cópia para não alterar o original
writeDataFile('sequence-cresc.txt', ascendingData);
console.log('Arquivo sequence-cresc.txt gerado com sucesso.');

// Criar e salvar dados em ordem decrescente
const descendingData = ascendingData.slice().reverse();
writeDataFile('sequence-desc.txt', descendingData);
console.log('Arquivo sequence-desc.txt gerado com sucesso.');

console.log('\nPreparação concluída!');