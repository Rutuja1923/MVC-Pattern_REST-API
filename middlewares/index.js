const fs = require('fs');

function logRequestResponse(fileName) {
    return (req, res, next) => {
        fs.appendFile(fileName, `${new Date().toISOString()}: ${req.method} ${req.path}\n`, (err,data) => {
            if (err) {
                console.error(`Error in writing to file: ${err.message}`);
            }
            next();
        });
    }
}

module.exports = {logRequestResponse};