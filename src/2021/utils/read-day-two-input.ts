import { readFile } from "fs";
import { Action } from "../types";

function readDayTwoInput(filePath: string) {
  return new Promise<Action[]>((res, rej) =>
    readFile(filePath, (err, data) => {
      if (err) {
        rej(err);
      } else {
        const actions = data
          .toString()
          .split("\n")
          .map((x) => x.split(" "))
          .map(([action, value]) => ({ action, value: Number(value) }));
        res(actions);
      }
    })
  );
}

export { readDayTwoInput };
