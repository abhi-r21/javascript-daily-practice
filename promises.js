// create a promisifed version of fs.readFile
const fs = require("fs");
function fsReadFilePromisified(fileName, encoding) {
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, encoding, function(err, data){
            if (err) {
                reject(err) 
            } else {
                resolve(data)
            }
        })
    });
}

fsReadFilePromisified("a.txt", "utf-8")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(e) {
        console.log("Error while reading the file");
    })

    

    
// Create a promisified version of setTimeout 
function setTimeoutPromisified(delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, delay )
    })
}

setTimeoutPromisified(1000)
    .then(function() {
        console.log("1 second has passed")
    })