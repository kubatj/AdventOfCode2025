import { readFile } from "node:fs/promises";

async function readInput() {
  const data = await readFile("input.txt", { encoding: "utf8" });
  return data.split("\n");
}

async function main() {
  const input = await readInput();
  let dial = 50; // start
  let total = 0;

  for (const code of input) {
    const dir = code[0];
    const nbr = code.substring(1, code.length);

    if (dir === "L") {
      dial -= Number(nbr);
    } else {
      dial += Number(nbr);
    }

    if (Math.abs(dial) % 100 === 0) {
      total++;
    }
  }

  console.log(`password = ${total}`);
}

await main();
