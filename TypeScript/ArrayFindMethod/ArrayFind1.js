var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 4 },
    { name: 'cherries', quantity: 3 },
    { name: 'kiwi', quantity: 7 },
    { name: 'blackberry', quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}
function isMinQuantity(fruit) {
    return fruit.quantity > 6;
}
console.log(inventory.find(isCherries));
console.log(inventory.find(isMinQuantity));
// { name: 'cherries', quantity: 5 }
console.log('*************************');
result = inventory.find( ({ name }) => name === 'cherries' );
console.log(result) 
// { name: 'cherries', quantity: 5 }
console.log('*************************');
function isFruit(fruits) {
    return fruits.name === this[0] || fruits.name === this[1];
}
// Finding Kiwi or Apples
console.log(inventory.find(isFruit,['kiwi','apples']));