type Matrix<T> = T[][];
type MatrixInfo = {
  winnerNumber: number;
  unmarkedNumsSum: number;
  turnsToWin: number;
};

function getColumn<T>(matrix: T[][], colIndex: number) {
  return matrix.map((x) => x[colIndex]);
}

function getRow<T>(matrix: T[][], colIndex: number) {
  return matrix[colIndex];
}

function isWinnerLine<T>(line: T[], set: Set<T>) {
  return line.every((x) => set.has(x));
}

function getUnmarkedNumsSum(
  matrix: Matrix<number>,
  markedNumbers: Set<number>
) {
  return matrix.reduce(
    (accum, curr) =>
      accum +
      curr.reduce((sum, x) => {
        if (markedNumbers.has(x)) {
          return sum;
        }

        return sum + x;
      }, 0),
    0
  );
}

function getMatrixInfo(
  matrix: Matrix<number>,
  nums: number[]
): MatrixInfo | null {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const xs = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const justCalledNum = nums[i];
    xs.add(justCalledNum);

    for (let row = 0; row < rows; row++) {
      const line = getRow(matrix, row);
      if (isWinnerLine(line, xs)) {
        return {
          turnsToWin: xs.size,
          unmarkedNumsSum: getUnmarkedNumsSum(matrix, xs),
          winnerNumber: justCalledNum,
        };
      }
    }

    for (let col = 0; col < cols; col++) {
      const line = getColumn(matrix, col);
      if (isWinnerLine(line, xs)) {
        return {
          turnsToWin: xs.size,
          unmarkedNumsSum: getUnmarkedNumsSum(matrix, xs),
          winnerNumber: justCalledNum,
        };
      }
    }
  }

  return null;
}

function getBingoWinnerBoardScore(
  matrixes: Matrix<number>[],
  nums: number[],
  f = (a: number, b: number) => a < b
) {
  const winnerInfo = matrixes.reduce<MatrixInfo | null>(
    (winnerMatrixInfo, currentMatrix) => {
      const currentMatrixInfo = getMatrixInfo(currentMatrix, nums);

      if (!currentMatrixInfo) {
        return winnerMatrixInfo;
      }

      if (!winnerMatrixInfo) {
        return currentMatrixInfo;
      }

      const { turnsToWin: currentTurnsToWin } = winnerMatrixInfo;
      const { turnsToWin: newTurnsToWin } = currentMatrixInfo;

      if (f(newTurnsToWin, currentTurnsToWin)) {
        return currentMatrixInfo;
      }

      return winnerMatrixInfo;
    },
    null
  );

  if (!winnerInfo) {
    return null;
  }

  const { winnerNumber, unmarkedNumsSum } = winnerInfo;

  return winnerNumber * unmarkedNumsSum;
}

export { getBingoWinnerBoardScore };
