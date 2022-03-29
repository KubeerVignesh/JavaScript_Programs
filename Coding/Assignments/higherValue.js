let highestValue = function (number) {
    let large = number[0]
    let small = number[0];
    for (let i = 2; i < number.length; i++) {
        if (number[i] > large) {
            large = number[i];
        } else if (number[i] < small) {
            small = number[i];
        }
    }
    console.log(`large value: ${large}`);
    console.log(`small value: ${small}`);
}
let newArray = [10, 20, 5, 2177, 253, 254, 98];
highestValue(newArray);