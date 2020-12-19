const greet = person => {
    return `Hey ${person}`;
}

const validUserNames = name => name.filter(user => user.length < 10);

const allEvens = even => even.every(numb => numb % 2 === 0)

const prices = [2, 3.77, 23.40, 9.50, 40.30, 8, 14.66];

const totalPrice = prices.reduce((total, price) => total + price, 7);

const mostExp = prices.reduce((mostExpensive, nextItem) => {
    if (mostExpensive > nextItem) {
        return mostExpensive;
    }
    return nextItem
})

const buildings = [{
    Name: 'Burj Khalifa',
    City: 'Dubay',
    Height: 828,
    Year: 2010,
}, {
    Name: 'Shanghai Tower',
    City: 'Shanghai',
    Height: 632,
    Year: 2015,
}, {
    Name: 'Abraj Al-Bait Clock Tower',
    City: 'Mecca',
    Height: 601,
    Year: 2012,
}, {
    Name: 'Ping An Finance Center',
    City: 'Shenzhen',
    Height: 599,
    Year: 2017,
}, {
    Name: 'Lotte World Tower',
    City: 'Seoul',
    Height: 554.5,
    Year: 2016,
}]

const lowestHeight = buildings.reduce((lowestBuilding, nextBuilding) => {
    if (lowestBuilding.Height < nextBuilding.Height) {
        return lowestBuilding
    }
    return nextBuilding
})

const oldestBuilding = buildings.reduce((oldest, nextBuilding) => {
    if (oldest.Year < nextBuilding.Year) {
        return oldest
    }
    return nextBuilding
})

// Doesent works, jet!!!!!!
// const buildingNames = buildings['name'].map((building) => {
//     return building.length})

// const longestName = buildingNames.reduce((longest, nextName) => {
//     for (let i = 0; i < longest.length; i++) {

//         for (let j = 0; j < nextName.length; j++) {
//             if (longest[i] > nextName[j]) {
//                 return longest;
//             }
//             return nextName;
//         }
//     }
// })