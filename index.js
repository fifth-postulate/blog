var fs = require('fs');

var config = require('./config.json');

fs.readdir(config.POSTS_DIRECTORY, function(error, data){
    if (error) throw error;

    console.log(data);
});
