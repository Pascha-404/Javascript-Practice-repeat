const names = ['jason   ', 'sisiphos   ', 'join eltoon   ', '    capital bla']

const cleanNames = names => names.map(namesedit => namesedit.trim())

const greet = person => {
    return `Hey ${person}!`
}

const validUserNames = user => user.filter(u => u.length < 10)

const hen = {
    name: 'Helen',
    eggCount: 0,
layAnEgg() {
    this.eggCount++;
    return 'EGG'
}
}

// const layAnEgg = () => (hen.eggCount++, 'EGG')