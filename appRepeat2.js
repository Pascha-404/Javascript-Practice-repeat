function capitalize(input) {
    let word = input;
    return word[0].toUpperCase() + word.slice(1);
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

function returnDay(day) {
    if (day >= 1 && day <= 7) {
        const week = ['Mond', 'Tues', 'Wedn', 'Thur', 'Frid', 'Sat', 'Sund'];
        return week[day - 1]
    } else {
        if (day === 0) {
            return null
        }

    }
}

function sumArray(number){
    let total = 0;
    for (let i = 0; i < number.length; i++){
        total += number[i];
    } return total
}

function multiply(y,x){
    return y*x;
}