// Calcula a média de uma lista de números
export const calculateMean = (arr) => {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

// Calcula o desvio padrão de uma lista de números
export const calculateStdDev = (arr) => {
  if (arr.length < 2) return 0;
  const mean = calculateMean(arr);
  const squaredDiffs = arr.map(val => (val - mean) ** 2);
  const avgSquaredDiff = calculateMean(squaredDiffs);
  return Math.sqrt(avgSquaredDiff);
};