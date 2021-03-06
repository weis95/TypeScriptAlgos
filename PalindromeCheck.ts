//o(n) time || o(1) space
export function isPalindrome(string: string) {
    let leftIndex = 0;
   let rightIndex = string.length - 1;
   while(leftIndex < rightIndex) {
       if (string[leftIndex] !== string[rightIndex]) return false;
       leftIndex++;
       rightIndex--;
   }
 return true;
}
