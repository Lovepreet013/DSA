function insertionSort(num) {
    for (let i = 1; i < num.length; i++) {
      let numberToInsert = num[i];
      let j;
  
      for (j = i - 1; num[j] > numberToInsert && j >= 0; j--) {
        // console.log(j);
        num[j + 1] = num[j];
        // console.log(num);
      }
      // console.log(j);
      num[j + 1] = numberToInsert;
      // console.log(num);
    }
    // console.log(num);
    return num;
  }
  insertionSort([3, 1]);
  