// exercises

const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
];

// old way
function getTotalAmountForProducts(products) {
    let totalPrice = 0;

    for (const product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
}

console.log(getTotalAmountForProducts(products));

let totalPrice = 0;
products.forEach((product) => totalPrice += product.price);
console.log(totalPrice);

// our reducer

const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
  ];

function ourReduce(arr, reducer, init) {
    let accum = 0;

    // for (const elem of arr) {
    //     accum = reducer(accum, elem);
    // }
    arr.forEach((elem) => accum += elem.amount);
    return accum;
}

function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
}


console.log(ourReduce(couponLocations, couponCounter, 0));
console.log(couponLocations.reduce(couponCounter, 0));
console.log(couponLocations.reduce((accum, location) => accum + location.amount, 0));

// other than init 0?
const doubledAndSummedFromTen = [1, 2, 3].reduce(function(accumulator, element){ 
    return element * 2 + accumulator
}, 10)
console.log(doubledAndSummedFromTen);

// returning objects
const letters = ['a', 'b', 'c', 'b', 'a', 'a'];

const letterCount = letters.reduce((counter, letter) => {
    // return (letter in counter) ? counter[letter]++ : counter[letter] = 1;
    if (letter in counter) {
        counter[letter]++;
    } else {
        counter[letter] = 1;
    }
    return counter;
}, {}); // {} = second argument initializes counter as an object

console.log(letterCount);

//

const artsShowcases = {
    "Dance": [],
    "Visual": [],
    "Music": [],
    "Theater": [],
    "Writing": []
  }

  