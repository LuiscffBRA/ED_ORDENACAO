// Troca dois elementos em um array
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Particiona o array e retorna o índice do pivô
const partition = (arr, inferior, superior) => {
  // Escolhe um pivô aleatório e o move para o final
  const randomIndex = Math.floor(Math.random() * (superior - inferior + 1)) + inferior;
  swap(arr, randomIndex, superior);
  const pivo = arr[superior];
  let i = inferior - 1;

  for (let j = inferior; j < superior; j++) {
    if (arr[j] <= pivo) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, superior);
  return i + 1;
};

// Função principal do Quick Sort que usa recursão
const quickSortRecursive = (arr, inferior, superior) => {
  if (inferior < superior) {
    const pivo_pos = partition(arr, inferior, superior);
    // Aplica o algoritmo recursivamente às duas metades
    quickSortRecursive(arr, inferior, pivo_pos - 1);
    quickSortRecursive(arr, pivo_pos + 1, superior);
  }
};

// Função de exportação principal
export const quickSort = (arr) => {
  quickSortRecursive(arr, 0, arr.length - 1);
  return arr;
};