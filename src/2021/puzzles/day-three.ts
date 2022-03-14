import { Bit } from "../types";

function calculatePowerConsumption(bits: Bit[][]) {
  let gammaBits = "";
  let betaBits = "";

  for (let j = 0; j < bits[j].length; j++) {
    let zeroQuantity = 0;
    let oneQuantity = 0;

    for (let i = 0; i < bits.length; i++) {
      const bit = bits[i][j];

      if (bit === 0) {
        zeroQuantity++;
      } else {
        oneQuantity++;
      }
    }
    gammaBits = `${gammaBits}${zeroQuantity > oneQuantity ? 0 : 1}`;
    betaBits = `${betaBits}${zeroQuantity > oneQuantity ? 1 : 0}`;
  }

  return parseInt(gammaBits, 2) * parseInt(betaBits, 2);
}

const bitArrToInt = <T>(arr: T[]) =>
  parseInt(arr.toString().split(",").join(""), 2);

function calculateLifeSupportRating(bits: Bit[][]) {
  let remainingOxygenNums = [...bits];
  let remainingCo2Nums = [...bits];

  let column = 0;

  while (remainingCo2Nums.length > 1 || remainingOxygenNums.length > 1) {
    if (remainingOxygenNums.length > 1) {
      let oxygenZeroQuantity = 0;
      let oxygenOneQuantity = 0;

      for (let row = 0; row < remainingOxygenNums.length; row++) {
        if (remainingOxygenNums[row][column] === 0) {
          oxygenZeroQuantity++;
        } else {
          oxygenOneQuantity++;
        }
      }

      const mostCommon = oxygenZeroQuantity > oxygenOneQuantity ? 0 : 1;

      remainingOxygenNums =
        oxygenZeroQuantity === oxygenOneQuantity
          ? remainingOxygenNums.filter((xs) => {
              return xs[column] === 1;
            })
          : remainingOxygenNums.filter((xs) => xs[column] === mostCommon);
    }

    if (remainingCo2Nums.length > 1) {
      let co2ZeroQuantity = 0;
      let co2OneQuantity = 0;

      for (let row = 0; row < remainingCo2Nums.length; row++) {
        if (remainingCo2Nums[row][column] === 0) {
          co2ZeroQuantity++;
        } else {
          co2OneQuantity++;
        }
      }

      const leastCommon = co2ZeroQuantity > co2OneQuantity ? 1 : 0;

      remainingCo2Nums =
        co2ZeroQuantity === co2OneQuantity
          ? remainingCo2Nums.filter((xs) => xs[column] === 0)
          : remainingCo2Nums.filter((xs) => xs[column] === leastCommon);
    }

    column++;
  }

  return bitArrToInt(remainingCo2Nums[0]) * bitArrToInt(remainingOxygenNums[0]);
}

export { calculatePowerConsumption, calculateLifeSupportRating };
