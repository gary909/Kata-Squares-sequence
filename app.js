function squares(x, n) {
    let myArr = [x,];
    for (let i = 0; i < n; i++) {
        myArr.push(x = x * x);
    }
    return myArr.slice(0, -1)
}

console.log(squares(2, 5)); // [2,4,16,256,65536]
console.log(squares(3, 3)); // [3,9,81]
console.log(squares(5, 3)); // [5,25,625]
console.log(squares(10, 4)); // [10,100,10000,100000000]

//It should return an empty array of n<=0
console.log(squares(2, 0)); // []