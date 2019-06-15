// dependencies
var path = require('path');

function htmlRoutes(app) {

    // route to survey page
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
    // route to home page
    app.use('*', function (request, response) {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
    })

}

// Export to server.js
module.exports = htmlRoutes;