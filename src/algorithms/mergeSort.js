// Função para mesclar duas metades ordenadas
// O algoritmo mescla as duas metades classificadas para obter o resultado final 
const merge = (esquerda, direita) => {
  let resultArray = [], i = 0, j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultArray.push(esquerda[i]);
      i++;
    } else {
      resultArray.push(direita[j]);
      j++;
    }
  }

  return resultArray.concat(esquerda.slice(i)).concat(direita.slice(j));
};

// Função principal do Merge Sort, baseada na abordagem de "dividir para conquistar" 
export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const meio = Math.floor(arr.length / 2);
  const esquerda = arr.slice(0, meio);
  const direita = arr.slice(meio);

  return merge(mergeSort(esquerda), mergeSort(direita));
};