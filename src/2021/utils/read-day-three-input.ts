import { readFile } from "fs/promises";
import { Action, Bit } from "../types";

async function readDayThreeInput(filePath: string) {
  const buffer = await readFile(filePath);

  return buffer
    .toString()
    .split("\n")
    .map((line) => line.split("").map(Number)) as Bit[][];
}

export { readDayThreeInput };
