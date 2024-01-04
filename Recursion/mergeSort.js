function mergeSort(nums){
    //base case : return if length 0 or 1
    if(nums.length < 2) return nums;

    //break into two smaller arrays
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const leftArray = nums.slice(0, middle);
    const rightArray = nums.slice(middle);

    //calll merge sort on leftArray and rightArray
    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    //return the merge of the breaked arrays
    return merge(sortedLeftArray, sortedRightArray)
}

const merge = function(sortedArray1, sortedArray2){
    //return one sorted array
    const result = [];
    while(sortedArray1.length && sortedArray2.length){
        if(sortedArray1[0] <= sortedArray2[0]){
            result.push(sortedArray1.shift());
        }
        else{
            result.push(sortedArray2.shift());
        }
    }
    return result.concat(sortedArray1, sortedArray2);//doing concat because one of them will going to be empty
}