// o(n)
export function sortedSquaredArray(array: number[]) {
    let sortedSquares = new Array(array.length).fill(0);
      
    for (let index = 0; index < array.length; index++ ) {
        const value = array[index];
        sortedSquares[index] = value * value;
    } 
          
        sortedSquares.sort((a,b) => a - b)
    return sortedSquares;
}
  