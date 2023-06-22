var product = [
    { name: "shirt", category: "clothing" },
    { name: "pants", category: "clothing" },
    { name: "hat", category: "accessories" },
    { name: "sunglasses", category: "accessories" },
];

function clothingProducts(product) {

    function fil(name)
     {
        for(element of product){
        if (element.category == name)
         {
            console.log(element.name+":"+element.category);
            // console.log(element.category);
        }
       
    }
   
}
 return fil;
}
let result = clothingProducts(product);
result("accessories");
