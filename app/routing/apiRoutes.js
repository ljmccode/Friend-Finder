var friends = require('../data/friends');

module.exports = function(app) {

    // list friends from friends.js in json
    app.get('/api/friends', function(request, response) {
        response.json(friends)
    })

    // add new friend 
    app.post('api/friends', function(request, response) {
        console.log(request.body)
        // creating a variable for new user scores
        var newUser = request.body
        var userScores = request.body.scores

        // find match!
        var matchIndex = '';
        friendMatch = '';

        // set base differential that will get replaced
        var totalDifference = 100;

        for (var i=0; i<friends.length; i++) {
            var currentDiff = 0;
            for (var j=0; j < userScores.length; j++) {
                currentDiff += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            // if better match, replace until cycled through all friends
            if(currentDiff < totalDifference) {
                totalDifference = currentDiff;
                matchIndex = i;
                friendMatch = friends[matchIndex]
                
            }
        }
        // push new user to friends data
        friends.push(newUser);

        // respond with best match in JSON
        response.json(friendMatch);
    })
}