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
    })
}