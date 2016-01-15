var fs = require('fs');
var path = require('path');

var config = require('./config.json');

fs.readdir(config.POSTS_DIRECTORY, function(error, data){
    if (error) throw error;

    data.forEach(function(post){
        var fileName = path.join(config.POSTS_DIRECTORY, post);

        console.log(fileName);
        fs.readFile(fileName, 'utf8', function(error, data){
            if (error) throw error;
            console.log(data);
        });
    });
});
