// dependencies
var path = require('path');

module.exports = function(app) {

    // route to home page
    app.use('/', function (request, response) {
        response.sendFile(path.join(_dirname, "/../public/home.html"));
    })

    // route to survey page
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(_dirname, "/../public/survey.html"));
    })
}