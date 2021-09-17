const initIsUsed = (factors) => {
  const size = factors.flat().length;
  return [...Array(size)].map((_) => Array(size).fill(false));
};

const generateTestCase = (i, j, isUsed, factors) => {
  const current = [i, j];
  isUsed[i][j] = true;
  for (let factorIndex = 2; factorIndex < factors.length; factorIndex++) {
    let [maxPoint, maxPointIndex] = [-1, -1];
    let startIndex = factors.slice(0, factorIndex).reduce((count, factor) => count + factor.length, 0);
    const factor = factors[factorIndex];

    for (let k = startIndex; k < startIndex + factor.length; k++) {
      const point = current.reduce((sum, index) => sum + !isUsed[index][k]);
      if (point > maxPoint) {
        maxPoint = point;
        maxPointIndex = k;
      }
    }
    current.forEach((index) => (isUsed[index][maxPointIndex] = true));
    current.push(maxPointIndex);
  }
  return current;
};

export default function (factors) {
  const isUsed = initIsUsed(factors);
  const testCases = [];
  for (let i = 0; i < factors[0].length; i++) {
    for (let j = factors[0].length; j < factors[0].length + factors[1].length; j++) {
      const testCaseIndexes = generateTestCase(i, j, isUsed, factors);
      const testCase = testCaseIndexes.map((index) => factors.flat()[index]);
      testCases.push(testCase);
    }
  }
  return testCases;
}
