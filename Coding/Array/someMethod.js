//some()

const products =[
{id: 1, name: "Chocolate" , price: 100},
{id: 2, name: "sweet", price; 62},
{id: 3, name: "chips", price:45}
];
products.some( (p)=>
{
return p.price>=50;
});