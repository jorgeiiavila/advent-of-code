import { Action } from "../types";

function dayTwoPartOne(actions: Action[]) {
  return actions.reduce(
    (accum, { action, value }) => {
      const { depth, horizontal } = accum;

      if (action === "forward") {
        return { depth, horizontal: horizontal + value };
      }

      if (action === "up") {
        return { depth: depth - value, horizontal };
      }

      if (action === "down") {
        return { depth: depth + value, horizontal };
      }

      return accum;
    },
    { horizontal: 0, depth: 0 }
  );
}

function dayTwoPartTwo(actions: Action[]) {
  return actions.reduce(
    (accum, { action, value }) => {
      const { depth, horizontal, aim } = accum;

      if (action === "forward") {
        return {
          depth: depth + aim * value,
          horizontal: horizontal + value,
          aim,
        };
      }

      if (action === "up") {
        return { depth, horizontal, aim: aim - value };
      }

      if (action === "down") {
        return { depth, horizontal, aim: aim + value };
      }

      return accum;
    },
    { horizontal: 0, depth: 0, aim: 0 }
  );
}

export { dayTwoPartOne, dayTwoPartTwo };
