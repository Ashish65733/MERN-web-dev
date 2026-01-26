const figlet = require('figlet');

let args = process.argv;


for (let i = 2; i < args.length; i++) {
    figlet(args[i], function (err, data) {
        if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
    });
}
