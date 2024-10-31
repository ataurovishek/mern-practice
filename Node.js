
const firstFile = require('fs')

firstFile.writeFile('output.txt', 'hello world', (err) => {
    if (err) {
        console.log('Error occured');
    } else {
        console.log('File written successfully');
    }
})