//It is used add item in the array, at the End of the array

const products = ["Chocolates", "Biscuits", "Chips"]
console.log(products); // ["Chocolate", "Biscuits", "Chips"]
products.push(" Sweets");
console.log(products); //["Chocolate", "Biscuits", "Chips", "Sweets"];


		(or)

const names = ["Kiran", "Manoj", "DhannuJay"];
const newNames = ["Sridhar", "Steven"];

for( let i=0; i<newNames.length; i++){
	names.push(newNames[i]);
}
console.log(names); 