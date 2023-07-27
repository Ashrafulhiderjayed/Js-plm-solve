function twoSum(array, target) {
    let i = 0;
    let j = array.length - 1;
  
    while (i < j) {
      if (array[i] + array[j] === target) {
        return [i, j];
      } else if (array[i] + array[j] < target) {
        i++;
      } else {
        j--;
      }
    }
  
    return [];
  }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 10;
  
  const indices = twoSum(array, target);
  
  console.log(indices);