function getValue(num){
  console.log(num);
}
function setValue(num1, num2, callback){
  let value = num1 + num2;
  callback(value);
}
setValue(19 , 20, getValue);