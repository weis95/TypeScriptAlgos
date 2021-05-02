export function selectionSort(array: number[]) {
	let startIndex = 0;
	while (startIndex < array.length - 1) {
		let smallestIndex = startIndex;
		for (let i = startIndex + 1; i < array.length; i++) {
			if(array[smallestIndex] > array[i]) smallestIndex = i
		}
		swap(startIndex, smallestIndex, array);
		startIndex++
	}
 	return array;
}

function swap(i: number, j: number, array: number[]) {
   const temp = array[j];
   array[j] = array[i];
   array[i] = temp;
}
