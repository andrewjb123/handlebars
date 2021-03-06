var fs = require('fs');
var hbs = require('hbs');

exports.setPartials = function(partialsDir){
    var filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function (filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
        hbs.registerPartial(name, template);
    });
}