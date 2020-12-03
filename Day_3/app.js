const { readFileSync } = require("fs");

// Part one.
const input = readFileSync(__dirname + "/input.txt", "utf8");
const lines = input.split("\r\n");

let count = 0;

let x = 0;
for(let y = 1; y < lines.length; y++) {

	x+=3;
	if(x >= lines[y].length) x = x - lines[y].length;

	if(lines[y][x] == "#") {
		count++;
	}

}

console.log(`Part one: Amount of trees is ${count}.`);

// For part 2 I just ran it with different steps and multiplied them.
// 85, 176, 96, 87, 47