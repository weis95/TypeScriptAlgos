export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
    blueShirtSpeeds.sort((a, b) => a - b);
      redShirtSpeeds.sort((a, b) => a - b);
    
      if(!fastest) reverseArrayInPlace(redShirtSpeeds);
      
      let totalSpeed = 0;
      for (let i = 0; i < redShirtSpeeds.length; i++) {
          const rider1 = redShirtSpeeds[i];
          const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];
          totalSpeed += Math.max(rider1, rider2)
      }
      return totalSpeed;
  }
  
  function reverseArrayInPlace(array: number[]) {
      let start = 0;
      let end = array.length - 1;
      while (start < end) {
          const temp = array[start];
          array[start] = array[end];
          array[end] = temp;
          start++;
          end--;
      }
  }