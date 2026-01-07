// Qs3. What is the output of the following code :

const object = {
    message : 'Hello, World!',
    logMessage(){
        console.log(this.message);
    }
}

setTimeout(object.logMessage, 1000);

// Output: undefined
