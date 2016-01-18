var fs = require('fs');
var path = require('path');
var markdown = require('markdown').markdown;
var qfs = require('promised-io/fs');

var config = require('./config.json');

qfs.readdir(config.POSTS_DIRECTORY)
    .then(function(posts){
        posts.forEach(function(post){
            var fileName = path.join(config.POSTS_DIRECTORY, post);

            qfs.readFile(fileName, 'utf8')
                .then(function(data){
                    var output = markdown.toHTML(data);

                    var outputName = path.join(config.BLOG_DIRECTORY,
                                               path.basename(post, '.md') + '.html');
                    return {
                        'content': output,
                        'name': outputName
                    };
                })
                .then(function(data){
                    return qfs.writeFile(data.name, data.content, 'utf8');
                })
                .then(function(){
                    console.log('finished writing ' + post);
                });
        });
    });
