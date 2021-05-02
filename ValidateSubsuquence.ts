// o(n)
export function isValidSubsequence(array: number[], sequence: number[]) {
    let arrId = 0
      let seqId = 0
      while (arrId < array.length && seqId < sequence.length){
          if(array[arrId] === sequence[seqId]){
              seqId += 1
          }
          arrId += 1
      }
    return seqId === sequence.length
  }
  