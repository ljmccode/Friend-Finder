// dependencies
const path = require("path");

function htmlRoutes(app) {

    // route to survey page
    app.get("/survey", (request, response) => {
        response.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // route to home page
    app.use("*", (request, response) => {
        response.sendFile(path.join(__dirname, "/../public/home.html"));
    });

}

// Export to server.js
module.exports = htmlRoutes;