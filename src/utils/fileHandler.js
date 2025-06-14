import fs from 'fs';
import path from 'path';

// Função para ler os números de um arquivo e retorná-los como um array
export const readDataFile = (fileName) => {
  const filePath = path.join('data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent.split('\n').filter(n => n).map(Number);
};

// Função para escrever um array de números em um arquivo
export const writeDataFile = (fileName, data) => {
  const filePath = path.join('data', fileName);
  const fileContent = data.join('\n');
  fs.writeFileSync(filePath, fileContent);
};