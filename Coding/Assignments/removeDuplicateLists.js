let removeDuplicateArray = function (numbers) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (newArray.indexOf(numbers[i]) === -1) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}
let numberArray = [10, 20, 30, 10, 36, 25];
console.log(removeDuplicateArray(numberArray));


