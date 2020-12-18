const greet = person => {
    return `Hey ${person}`;
}

const validUserNames = name => name.filter(user => user.length<10);
