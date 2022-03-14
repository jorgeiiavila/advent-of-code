const dayOnePartOne = (measures: number[]) =>
  measures
    .slice(1)
    .reduce(
      ({ n, previous }, curr) =>
        curr > previous ? { previous: curr, n: n + 1 } : { previous: curr, n },
      { previous: measures[0], n: 0 }
    ).n;

function dayOnePartTwo(measurements: number[]) {
  let prev = measurements[0] + measurements[1] + measurements[2];
  let n = 0;

  for (let i = 1; i < measurements.length - 2; i++) {
    const curr = measurements[i] + measurements[i + 1] + measurements[i + 2];
    if (curr > prev) {
      n++;
    }
    prev = curr;
  }

  return n;
}

export { dayOnePartOne, dayOnePartTwo };
