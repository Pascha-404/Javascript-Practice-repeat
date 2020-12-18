const greet = person => {
    return `Hey ${person}`;
}

const validUserNames = name => name.filter(user => user.length < 10);

const allEvens = even => even.every(numb => numb % 2 === 0)

const prices = [2, 3.77, 23.40, 9.50, 40.30, 8, 14.66];

const totalPrice = prices.reduce((total, price) => total + price, 7);

const mostExp = prices.reduce((mostExpensive, nextItem) => {
if (mostExpensive > nextItem){
    return mostExpensive;
} return nextItem
})