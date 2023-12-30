function insertionSort(nums){
    for(let i = 1; i < nums.length; i++){
        let numberToInsert = nums[i];
        let j;
        for(j = i - 1; nums[j] > numberToInsert && j >= 0; j--){
            nums[j+1] = nums[j];
        }

        nums[j+1] = numberToInsert;
    }

    return nums;
}