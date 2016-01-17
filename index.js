var path = require('path');
var markdown = require('markdown').markdown;
var qfs = require('promised-io/fs');

var config = require('./config.json');

qfs.readdir(config.POSTS_DIRECTORY)
    .then(function(posts){
        var input = '';
        posts.forEach(function(post){
            var link = path.basename(post, '.md') + '.html';
            input += '* ';
            input += '[' + post + '](' + link + ')\n';
        });
        var output = markdown.toHTML(input);

        var outputName = path.join(config.BLOG_DIRECTORY, 'index.html');
        return qfs.writeFile(outputName, output, 'utf8');
    })
    .then(function(){
        console.log('finished writing index.html');
    });
