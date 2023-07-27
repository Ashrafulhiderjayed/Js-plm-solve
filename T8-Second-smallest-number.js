function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return undefined; // Return undefined if the array is not valid or has less than 2 elements
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest !== Infinity ? secondSmallest : undefined; 
  }
  
  // Test the function
  const numbers = [5, 2, 8, 1, 3, 7];
  console.log(findSecondSmallest(numbers)); 
  