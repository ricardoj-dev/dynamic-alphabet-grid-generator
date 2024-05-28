type MatrixPosition = {
  row: number;
  column: number;
};

let currentMatrix: string[][] = [];
let currentCode: string = '';

export function getMatrix(): string[][] {
  return currentMatrix;
}

export function getCode(): string {
  return currentCode;
}

export function generateRandomMatrix(): string[][] {
  const matrix: string[][] = [];

  for (let i = 0; i < 10; i++) {
    const row: string[] = [];
    for (let j = 0; j < 10; j++) {
      const char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      row.push(char);
    }

    matrix.push(row);
  }

  currentMatrix = matrix;

  return matrix;
}

export function generateMatrixWithBias(bias: string): string[][] {
  const matrix = generateRandomMatrix();

  const normalizedBias = bias.toLowerCase();

  // - Count how many positions already are equal to bias
  let existingBiasCount = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (matrix[i][j] === normalizedBias) {
        existingBiasCount++;
      }
    }
  }

  // - Subtract the number of already existing bias positions to 20% of matrix
  const remainingBiasCount = Math.max(0, 20 - existingBiasCount);

  // - Find unique positions in matrix to be replaced by bias,
  // - avoiding positions wich already had it
  const uniquePositions = new Set();
  while (uniquePositions.size < remainingBiasCount) {
    const randomRowIndex = Math.floor(Math.random() * 10);
    const randomColIndex = Math.floor(Math.random() * 10);
    const position = `${randomRowIndex},${randomColIndex}`;

    // - Checks if the position is already equal to bias
    if (!uniquePositions.has(position) && matrix[randomRowIndex][randomColIndex] !== normalizedBias) {
      uniquePositions.add(position);
    }
  }

  // - Replace the characters by the bias on that positions
  uniquePositions.forEach((position: any) => {
    const [rowIndex, colIndex] = position.split(',').map(Number);
    matrix[rowIndex][colIndex] = normalizedBias;
  });

  currentMatrix = matrix;

  return matrix;
}

export function generateCode(): string {
  const currentTime = _getCurrentTime();
  const seconds = currentTime.split(':')[2];

  // - get the positions in matrix based in seconds
  const firstPosition: MatrixPosition = {
    row: Number(seconds.split('')[0]),
    column: Number(seconds.split('')[1])
  };
  const secondPosition: MatrixPosition = {
    row: Number(seconds.split('').reverse()[0]),
    column: Number(seconds.split('').reverse()[1])
  };

  // - get characters in the positions of the last generated matrix
  const firstCharacter = currentMatrix[firstPosition.row][firstPosition.column];
  const secondCharacter = currentMatrix[secondPosition.row][secondPosition.column];

  // - count the number of occurrences of each char
  const firstCharacterOccurrences = _numberOfOccurrences(firstCharacter);
  const secondCharacterOccurrences = _numberOfOccurrences(secondCharacter);

  currentCode = `${_processOccurrence(firstCharacterOccurrences)}${_processOccurrence(secondCharacterOccurrences)}`;

  return currentCode;
}

function _getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minuts = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minuts}:${seconds}`;
}

function _numberOfOccurrences(charToCount: string): number {
  let count = 0;

  for (const row of currentMatrix) {
    for (const currentChar of row) {
      if (currentChar === charToCount) {
        count++;
      }
    }
  }

  return count;
}

// If the count is larger than 9, divide the count by the lowest integer possible
// in order to get a value lower or equal to 9.
function _processOccurrence(count: number): number {
  return count > 9 ? Math.ceil(count / 9) : count;
}
