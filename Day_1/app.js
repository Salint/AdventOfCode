const { readFileSync } = require("fs");

const input = readFileSync(__dirname + "/input.txt", "utf8");
const array = input.split("\n");


// First puzzle

console.log("First puzzle");

outer_loop:
for(let i = 0; i < array.length; i++) {

	for(let j = i; j < array.length; j++) {

		if((Number(array[i]) + Number(array[j])) == 2020) {
			console.log(Number(array[i]) * Number(array[j]));
			break outer_loop;
		}
	}

}

console.log("Second puzzle");

outer_loop:
for(let i = 0; i < array.length; i++) {

	for(let j = i; j < array.length; j++) {

		for(let k = j; k < array.length; k++) {

			if((Number(array[i]) + Number(array[j]) + Number(array[k])) == 2020) {
				console.log(Number(array[i]) * Number(array[j]) * Number(array[k]));
				break outer_loop;
			}

		}
	}

}