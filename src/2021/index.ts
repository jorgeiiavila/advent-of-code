import { getBingoWinnerBoardScore } from "./puzzles/day-four";
import { readInput } from "./utils/read-day-four-input";

async function start() {
  try {
    const { matrixes, nums } = await readInput(
      `${__dirname}/input/day-four.txt`
    );
    console.log(getBingoWinnerBoardScore(matrixes, nums, (a, b) => a > b));
  } catch (err) {
    console.error(err);
  }
}

start();
