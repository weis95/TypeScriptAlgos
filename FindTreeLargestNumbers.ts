export function findThreeLargestNumbers(array: number[]) {
	const threeLargest: Array<number | null> = [null, null, null]
 	for (const num of array) {
		updateLargest(threeLargest, num);
	}
  return threeLargest
}

//Then this.
function updateLargest(threeLargest: Array<number | null>, num: number) {
	if(threeLargest[2] === null || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
	} else if(threeLargest[1] === null || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1);
	} else if(threeLargest[0] === null || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0)
	}
} 

//First this, after const threeLargest.

function shiftAndUpdate(array: Array<number | null>, num: number, i: number) {
	for (let j = 0; j <= i; j++) {
		if( j === i ){
			array[j] = num;
		} else {
			array[j] = array[j + 1]
		}
	}
}