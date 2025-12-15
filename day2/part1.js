import { readFile } from "node:fs/promises";

async function readInput() {
  const text = await readFile("input.txt", { encoding: "utf8" });
  return text.split(",");
}

/*
Since the young Elf was just doing silly patterns, you can find the invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice. So, 55 (5 twice), 6464 (64 twice), and 123123 (123 twice) would all be invalid IDs.

None of the numbers have leading zeroes; 0101 isn't an ID at all. (101 is a valid ID that you would ignore.)

Your job is to find all of the invalid IDs that appear in the given ranges. In the above example:

11-22 has two invalid IDs, 11 and 22.
95-115 has one invalid ID, 99.
998-1012 has one invalid ID, 1010.
1188511880-1188511890 has one invalid ID, 1188511885.
222220-222224 has one invalid ID, 222222.
1698522-1698528 contains no invalid IDs.
446443-446449 has one invalid ID, 446446.
38593856-38593862 has one invalid ID, 38593859.
The rest of the ranges contain no invalid IDs.
Adding up all the invalid IDs in this example produces 1227775554.

What do you get if you add up all of the invalid IDs?


 */

function isInvalid(nbr) {
  const valueString = nbr.toString();
  const half1 = valueString.slice(0, valueString.length / 2);
  const half2 = valueString.slice(valueString.length / 2);

  return half1 === half2;
}

async function main() {
  const input = await readInput();

  let total = 0;

  for (const value of input) {
    const [start, end] = value.split("-").map(Number);
    for (let i = start; i <= end; i++) {
      if (isInvalid(i)) {
        console.log("is invalid", i);
        total += i;
      }
    }
  }

  console.log(`Result = ${total}`);
}

await main();
