import { readFile } from "fs/promises";

type BingoInput = {
  nums: number[];
  matrixes: number[][][];
};

async function readInput(filePath: string) {
  const buffer = await readFile(filePath);

  const lines = buffer.toString().split("\n");

  const input: BingoInput = {
    nums: lines[0].split(",").map(Number),
    matrixes: [],
  };

  for (let i = 2; i < lines.length; i++) {
    const matrix: number[][] = [];

    while (lines[i] && lines[i] !== "\n") {
      const line = lines[i];
      matrix.push(
        line
          .split(" ")
          .filter((x) => !!x)
          .map(Number)
      );
      i++;
    }

    input.matrixes.push(matrix);
  }

  return input;
}

export { readInput };
