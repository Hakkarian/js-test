const cat = document.querySelectorAll('.item');

console.log('Number of categories: ', cat.length);


cat.forEach(caty => {
    
    console.log('Category: ', caty.querySelector('h2').textContent);
    console.log('Elements: ', caty.querySelectorAll('ul > li').length);
}
);

let cats = ["cat", "dog", "parrot"];

for (let i = 0; i < cats.length; i += 1) {
    if (cats[i] = "dog") 
        console.log(cats[i]);
    
}
// const users = 
//     {
//         money: true,
//         price: 50,
//         happiness: true,
//         whatchaLookin(amogus) {
//             console.log(`Ur under arrest, ${amogus}`);
//             console.log(this);
//         }
//     }



// function bind(callback, o) {
//     return function (...c) {
//             callback.apply(o, c)
//         }
//     }
// const fn = bind(users.whatchaLookin, users);

// fn("sus");



// const catItem = document.querySelectorAll('ul > li > ul')
// let catNum = 0;
// const catArr = cat.forEach(caty => catNum += 1);

// const basket = catItem.forEach(caty => caty.classList.add('catItem'));
// const basketItem = document.querySelector('.catItem');
// const basketLi = basketItem.getElementsByTagName('li');

// let basketNum = 0;



// const animals = document.querySelector('h2');
// animals.classList.add('.animals__title');

// const products = document.querySelector('h2');
// products.classList.add('.products__title');


// console.log('Number of categories: ', catNum);
// console.log('Category: ', animals.textContent);
// console.log('Category: ', );
// console.log('Elements: ', );
// console.log('Category: ', );
// console.log('Elements: ',);
// console.log(basketLi);


