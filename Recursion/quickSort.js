function quickSort(nums){
    //base case, array of length 1 or 0
    if(nums.length < 2) return nums;

    //selecting pivot
    const pivot = nums[nums.length - 1];

    //separate the left and right arrays
    const left = [];
    const right = [];

    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] < pivot){
            left.push(nums[i]);
        }
        else{
            right.push(nums[i]);
        }
    }

    //call quickSort on left and right arrays
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    //return left.concat(pivot, right)
    return sortedLeft.concat(pivot, sortedRight);

    //Last three line can be written as return[...quickSort(left), pivot,...quickSort(right)]
}