 //Pop() method is used for removing last item of the Array.


//Push() Method
const products = ["Chocolates", "Biscuits", "Chips"]
console.log(products); // ["Chocolate", "Biscuits", "Chips"]
products.push(" Sweets");
console.log(products); //["Chocolate", "Biscuits", "Chips", "Sweets"];

//pop() Method
products.pop();
console.log(products); // ["Chocolate", "Biscuits", "Chips"]

		(or)

const names = ["Kiran", "Manoj", "DhannuJay"];
const newNames = ["Sridhar", "Steven"];

for( let i=0; i<newNames.length; i++){
	newNames.pop();
}
console.log(names, newNames); 