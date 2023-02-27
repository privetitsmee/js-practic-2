let product1 = 'Бумага А4 белая';
let product2 = 'Стол деревянный';
let product3 = 'Ножницы обычные';


let productPrice1 = 100.50;
let productPrice2 = 3000;
let productPrice3 = 250;


let productQuantity1 = +prompt(`Укажите количество продуктов +'${product1}' , цена '${productPrice1}'`);
let productQuantity2 = +prompt(`Укажите количество продуктов +'${product2}' , цена '${productPrice2}'`);
let productQuantity3 = +prompt(`Укажите количество продуктов +'${product3}' , цена '${productPrice3}'`);


let totalPrice = 0;
totalPrice += productPrice1 * productQuantity1;
totalPrice += productPrice2 * productQuantity2;
totalPrice += productPrice3 * productQuantity3;

alert(`Сумма вашего заказа ${totalPrice}`);

let isShippingFree = totalPrice > 1000;
if(isShippingFree){
    alert('Доставка за наш счет!')
}
else{
    alert('Бесплатная доставка от 1000')
}