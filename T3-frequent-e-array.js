function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; // Return null for empty or non-array input
    }
  
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;
  
    arr.forEach((element) => {
      // Counting the frequency of each element
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  
      // Updating the most frequent element and its frequency
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    });
  
    return mostFrequentElement;
  }
  
  // Example usage:
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequentElement(inputArray);
  console.log(result); // Output: 3
  