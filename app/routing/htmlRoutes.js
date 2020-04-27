// dependencies
import { join  } from "path";
import fs from "fs";

function htmlRoutes(app) {

    const __dirname= fs.realpathSync(".");

    console.log(__dirname);

    // route to survey page
    app.get("/survey", (request, response) => {
        response.sendFile(join(__dirname, "app/public/survey.html"));
    });
    // route to home page
    app.use("*", (request, response) => {
        response.sendFile(join(__dirname, "app/public/home.html"));
    });

}

// Export to server.js
export default htmlRoutes;