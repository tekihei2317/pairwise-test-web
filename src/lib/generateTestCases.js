const initGrid = (factors) => {
  const size = factors.flat().length;
  return [...Array(size)].map((_) => Array(size).fill(-1));
};

const generateTestCase = (i, j, currentGrid, factors, testCaseIndex) => {
  const current = [i, j];
  currentGrid[i][j] = testCaseIndex;
  for (let factorIndex = 2; factorIndex < factors.length; factorIndex++) {
    let [maxPoint, maxPointIndex] = [-1, -1];
    let startIndex = factors.slice(0, factorIndex).reduce((count, factor) => count + factor.length, 0);
    const factor = factors[factorIndex];

    for (let k = startIndex; k < startIndex + factor.length; k++) {
      const point = current.reduce((sum, index) => sum + (currentGrid[index][k] === -1));
      if (point > maxPoint) {
        maxPoint = point;
        maxPointIndex = k;
      }
    }
    current.forEach((index) => (currentGrid[index][maxPointIndex] = testCaseIndex));
    current.push(maxPointIndex);
  }
  return current;
};

export default function (factors) {
  const currentGrid = initGrid(factors);
  let testCaseIndex = 0;

  const testCases = [];
  for (let i = 0; i < factors[0].length; i++) {
    for (let j = factors[0].length; j < factors[0].length + factors[1].length; j++) {
      const indexes = generateTestCase(i, j, currentGrid, factors, testCaseIndex);
      const testCase = indexes.map((index) => factors.flat()[index]);
      testCases.push(testCase);
      testCaseIndex++;
    }
  }
  return { results: testCases, grid: currentGrid };
}
