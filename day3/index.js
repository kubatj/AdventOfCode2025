import { readFile } from "node:fs/promises";

async function readInput() {
  const input = await readFile("input.txt", { encoding: "utf-8" });

  return input.split("\n");
}

async function part1() {
  const banks = await readInput();

  let maxCount = 0;

  for (const bank of banks) {
    let max = 0;

    for (let i = 0; i < bank.length - 1; i++) {
      for (let k = i + 1; k < bank.length; k++) {
        const temp = bank[i].concat(bank[k]);
        max = Math.max(max, Number(temp));
      }
    }

    maxCount += max;
  }

  console.log(maxCount);
}

async function part2() {
  // todo
}

await part1();
