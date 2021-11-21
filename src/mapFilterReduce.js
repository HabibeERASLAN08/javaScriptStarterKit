<<<<<<< HEAD
let cart=[
    {id:1, productName:"Telefon",quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak",quantity:2, unitPrice:30},
    {id:3, productName:"Kalem",quantity:1, unitPrice:20},
    {id:4, productName:"Şarj cihazı",quantity:2, unitPrice:100},
    {id:5, productName:"Kitap",quantity:3, unitPrice:30},
    {id:6, productName:"Pot",quantity:5, unitPrice:150},
=======
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
]

console.log("<ul>")
cart.map(product=>{
<<<<<<< HEAD
    console.log("<li>"+product.productName + " :"
    + product.unitPrice * product.quantity+"</li>")
})
console.log("<ul>")


let total= cart.reduce((acc,product)=>acc +product.unitPrice*product.quantity,0)
console.log(total)




=======
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

//23.00 Dersteyiz
console.log(total)


>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

<<<<<<< HEAD














function addToCart(sepet){
    sepet.push({id:7, productName:"Ruhsat",quantity:1,unitPrice:20})
}
=======
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}



>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
addToCart(cart)

console.log(cart)

let sayi = 10

<<<<<<< HEAD
function sayiTopla(number){
    number+=1
}
sayiTopla(sayi)
console.log(sayi)
=======
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

//23.00 Dersteyiz
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
