export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
    redShirtHeights.sort((a, b) => b -a );
    blueShirtHeights.sort((a, b) => b -a );
    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
    for (let i = 0; i < redShirtHeights.length; i++) {
        const redShirtHeight = redShirtHeights[i];
        const blueShirtHeight = blueShirtHeights[i];
        
        if(shirtColorInFirstRow === 'RED') {
            if(redShirtHeight >= blueShirtHeight) return false;
        } else if (blueShirtHeight >= redShirtHeight) return false;
    }
      
    return true;
}
  