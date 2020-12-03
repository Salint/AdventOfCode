const { readFileSync } = require("fs");

// Part one.
const input = readFileSync(__dirname + "/input.txt", "utf8");
const lines = input.split("\r\n");

let count = 0;

let y = 0;
for(let x = 1; x < lines.length; x+=2) {

	y+=1;
	if(y >= lines[x].length) y = y - lines[x].length;

	if(lines[x][y] == "#") {
		count++;
	}

}

console.log(`Part one: Amount of trees is ${count}.`);

// For part 2 I just ran it with different steps and multiplied them.
// 85, 176, 96, 87, 47