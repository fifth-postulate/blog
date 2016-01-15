var fs = require('fs');
var path = require('path');
var markdown = require('markdown').markdown;

var config = require('./config.json');

fs.readdir(config.POSTS_DIRECTORY, function(error, data){
    if (error) throw error;

    data.forEach(function(post){
        var fileName = path.join(config.POSTS_DIRECTORY, post);

        console.log(fileName);
        fs.readFile(fileName, 'utf8', function(error, data){
            if (error) throw error;

            var output = markdown.toHTML(data);
            console.log(data);
            console.log(output);

            var outputName = path.join(config.BLOG_DIRECTORY, path.basename(post, '.md') + '.html');
            fs.writeFile(outputName, output, 'utf8', function(error){
                if (error) throw error;

                console.log('finished writing');
            });
        });
    });
});
