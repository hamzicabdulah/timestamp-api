var express = require('express');
var app = express();

app.get('/:param', function(req, res) {
    var object = {},
    param = req.params.param == Number(req.params.param) ? Number(req.params.param) * 1000 : req.params.param,
    date = new Date(param),
    options = {year: 'numeric', month: 'long', day: 'numeric'};
    object.unix = date.getTime() / 1000;
    object.natural = date.toLocaleString() !== "Invalid Date" ? date.toLocaleString('en-US', options) : null;
    res.send(object);
});

app.get('/:anything', function (req, res) {
    res.redirect('/');
});

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port 8080');
});