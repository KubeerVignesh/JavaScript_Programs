//------Recursive Function

/* function square(num){
    return num*num;
}
function cubeOfNumber(n){
    return square(n)*n;
}
console.log(cubeOfNumber(5));*/


//--------CallBack Function----
function myDisplay(some){
    console.log(some);
}
function myCalculation(num1, num2)
{
    value = num1+num2
    return value;
}
let result = myCalculation(10,20);
console.log(myDisplay(result))
