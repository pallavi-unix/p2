function MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice(); // Create a copy of the original array
  
    function arrayFilterer(filterCriteria, callback) {
      // Check if filterCriteria is a function, if not, return currentArray
      if (typeof filterCriteria !== 'function') {
        return currentArray;
      }
  
      // Filter the currentArray based on the filterCriteria function
      currentArray = currentArray.filter(filterCriteria);
  
      // Check if callback is a function, if yes, call it with currentArray
      if (typeof callback === 'function') {
        callback(currentArray);
      }
  
      // Return arrayFilterer for chaining
      return arrayFilterer;
    }
  
    return arrayFilterer;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const filterFunction = MakeMultiFilter(originalArray);
  
  // Filter out even numbers
  filterFunction((element) => element % 2 === 1, (filteredArray) => {
    console.log("Filtered Array:", filteredArray);
  });
  
  // Filter out numbers less than 4
  filterFunction((element) => element >= 4, (filteredArray) => {
    console.log("Filtered Array:", filteredArray);
  });
  
  // Get the final filtered array
  const finalFilteredArray = filterFunction(); // Returns [4, 5]
  console.log("Final Filtered Array:", finalFilteredArray);