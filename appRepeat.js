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