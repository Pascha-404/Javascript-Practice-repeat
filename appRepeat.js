function multiply(x, y) {
    return x * y;
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

function lastElement(element) {
    if (element.length === 0) {
        return null;
    }
    return element[element.length - 1]
}

function capitalize (input){
let word = input;

return word[0].toUpperCase() + word.slice(1);
}

function sumArray(numb){
    let total = 0
    for (let i = 0; i < numb.length; i++){
     
        total += numb[i];
        
    }return total;
}