function nestedArrayAdd(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const current = array[i];
        if(Array.isArray(current)){
            sum += nestedArrayAdd(current);
        }
        else{
            sum += current;
        }
    }
    return sum;
}