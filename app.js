function lastElement (argu){
    if (argu.length === 0) {
        return null;
    } else {
        for (let i = 0; i < argu.length; i++){
            return argu[argu.length - 1]
        }
    }
}

function capitalize(input){
let word = input;
return word[0].toUpperCase() + word.slice(1);
}

function sumArray(numb){
    let total = 0;
    for (let i = 0; i < numb.length; i++){
        total += numb[i];
    }
    return total;
}

function returnDay(day){
    if (day < 1 | day > 7){
        return null;
    } else {
        const weekDays = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
            return weekDays[day-1];
    }
}