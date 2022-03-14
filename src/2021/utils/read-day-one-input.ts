import { readFile } from "fs";

function readInput(filePath: string) {
  return new Promise<number[]>((res, rej) => {
    readFile(filePath, (err, data) => {
      if (err) {
        rej(err);
      } else {
        const nums = data.toString().split("\n").map(Number);
        res(nums);
      }
    });
  });
}

export { readInput };
