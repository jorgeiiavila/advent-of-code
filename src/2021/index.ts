import {
  calculateLifeSupportRating,
  calculatePowerConsumption,
} from "./puzzles/day-three";
import { Bit } from "./types";
import { readDayThreeInput } from "./utils";

async function start() {
  try {
    const bitsList = await readDayThreeInput(
      `${__dirname}/input/day-three.txt`
    );
    const lifeSupportRating = calculateLifeSupportRating(bitsList);
    console.log(lifeSupportRating);
  } catch (err) {
    console.error(err);
  }
}

start();
