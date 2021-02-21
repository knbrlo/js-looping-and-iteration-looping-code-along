function writeCards(names, event) {
    var arrayMessages = [];
    for (let t = 0; t < names.length; t++) {
        const customMessage = `Thank you, ${names[t]}, for the wonderful surprise gift!`;
        arrayMessages.push(customMessage);
    }
    return arrayMessages;
}

function countDown(numberToStartAt) {
    while (numberToStartAt > -1) {
        console.log(numberToStartAt--);
    }
}