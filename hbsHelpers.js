
var setPartials = function(partialsDir){
    //var partialsDir = __dirname + '/views/html/partials';
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