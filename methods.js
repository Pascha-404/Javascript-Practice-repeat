const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG'
    }

}

const names = ['jason   ', 'sisiphos   ', 'join eltoon   ', '    capital bla']

const namesFixed = names.map(function cleanNames(namesEdit) {
    return namesEdit.trim()
})