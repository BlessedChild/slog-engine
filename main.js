var fs = require('fs');

// define the template engine
module.exports = function () {
    return function (filePath, options, callback) {
        fs.readFile(filePath, function (err, content) {
            if (err) return callback(err)
            // this is an extremely simple template engine
            var rendered = content.toString().replace('#title#', '<title>' + options.title + '</title>')
                .replace('#message#', '<h1>' + options.message + '</h1>')
            return callback(null, rendered)
        })
    }
}