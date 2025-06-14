// Baseado na lógica de construir o vetor ordenado um item de cada vez 
export const insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const escolhido = arr[i];
    let j = i - 1;

    // Move os elementos maiores que 'escolhido' para a direita
    while (j >= 0 && arr[j] > escolhido) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = escolhido;
  }
  return arr;
};