var fs = require('fs');
var path = require('path');
var markdown = require('markdown').markdown;

var config = require('./config.json');

fs.readdir(config.POSTS_DIRECTORY, function(error, data){
    if (error) throw error;

    var input = '';
    data.forEach(function(post){
        var link = path.basename(post, '.md') + '.html';
        input += '* ';
        input += '[' + post + '](' + link + ')\n';
    });
    var output = markdown.toHTML(input);

    var outputName = path.join(config.BLOG_DIRECTORY, 'index.html');
    fs.writeFile(outputName, output, 'utf8', function(error){
        if (error) throw error;

        console.log('finished writing ' + outputName);
    });
});
