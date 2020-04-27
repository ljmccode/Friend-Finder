const friends = require("../data/friends");

function apiRoutes(app) {

    // list friends from friends.js in json
    app.get("/api/friends", (request, response) => {
        response.json(friends);
    });

    // add new friend 
    app.post("/api/friends", (request, response) => {
        console.log(request.body);
        // creating a variable for new user scores
        const newUser = request.body;
        const userScores = request.body.scores;

        // find match!
        let matchIndex = "";
        let friendMatch = "";

        // set base differential that will get replaced
        let totalDifference = 100;

        for (let i=0; i<length; i++) {
            let currentDiff = 0;
            for (let j=0; j < userScores.length; j++) {
                currentDiff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            // if better match, replace until cycled through all friends
            if(currentDiff < totalDifference) {
                totalDifference = currentDiff;
                matchIndex = i;
                friendMatch = friends[matchIndex];
                
            }
        }
        console.log("new User", newUser);
        // push new user to friends data
        friends.push(newUser);

        // respond with best match in JSON
        response.json(friendMatch);
    });
}

// Export to server.js
module.exports = apiRoutes;