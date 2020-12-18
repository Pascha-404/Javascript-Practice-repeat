const greet = person => {
    return `Hey ${person}`;
}

const validUserNames = name => name.filter(user => user.length<10);

const allEvens = even => even.every(numb => numb %2 === 0)