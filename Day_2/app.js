const { readFileSync } = require("fs");

const input = readFileSync(__dirname + "/input.txt", "utf8");
const lines = input.split("\n");

// Part one.
let valid_part_one = 0;
for(let i = 0; i < lines.length; i++) {

	const parts = lines[i].split(" ");
	const numbers = parts[0].split("-");

	let times = 0;

	for(let j = 0; j < parts[2].length; j++) {
		if(parts[2][j] == parts[1][0]) {
			times++;
		}
	}

	if(times >= Number(numbers[0]) && times <= Number(numbers[1])) valid_part_one++;
}

console.log(`Part one: There are ${valid_part_one} valid passwords in the input.\n\n`);


// Part two.
let valid_part_two = 0;
for(let i = 0; i < lines.length; i++) {

	const parts = lines[i].split(" ");
	const numbers = parts[0].split("-");

	let valid = false;
	for(let j = 0; j < numbers.length; j++) {
		if(parts[2][Number(numbers[j]) - 1] == parts[1][0]) {
			if(valid == false) valid = true;
			else valid = false;
		}	
	}
	if(valid == true) valid_part_two++;
}

console.log(`Part two: There are ${valid_part_two} valid passwords in the input.\n\n`);