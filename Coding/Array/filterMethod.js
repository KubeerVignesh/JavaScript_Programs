//filter
const products=[
{id: 1, name:"SamsungA9pro" , brand:"Samsung", price:12000},
{id: 2, name:"Redmi 4", brand: "Mi", price: 400000},
{id: 3, name: "PocoC2" , brand: "Poco", price:61280},
{id: 4, name: "iPhone13", brand:"Apple", price:26521}
];
products.filter( (p)=>{
return p.brand=="Mi";
});
