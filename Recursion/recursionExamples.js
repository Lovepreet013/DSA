//Here you'd need to trade off having readable code versus a relatively poor performance profile
function fibonacci(n){
    if(n === 2 || n === 1){
        return 1;
    }else if(n === 0){
        return 0;
    }
    return fibonacci(n-1) + fibonacci(n-2) ;
}

//Iterative solution :
function fibonacci2(n){
    const sequence = [0,1];
    for(let i = 2; i < n + 1; i++){
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence[n];
}

//2nd example
function factorial(n){
    if(n < 2) return 1;
    return n * factorial(n - 1);
}