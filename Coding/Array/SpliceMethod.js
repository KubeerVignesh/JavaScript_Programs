// Removes the Specified no.of elements, starting from the startIndex
//[ ].splice(startIndex, count)

let products=[
{id: 1, productName:"Tv", price: 462},
{id: 2, productName:"ipad", price: 652},
{id: 3, productName:"Monitor", price:6822}
];
products.splice(1,2) ;
console.log(products);


			(or)
let products=[
{id: 1, productName:"Tv", price: 462},
{id: 2, productName:"ipad", price: 652},
{id: 3, productName:"Monitor", price:6822}
];
products.splice(1,1,{id : 2, productName:"Mobile", price:65});
console.log(products);