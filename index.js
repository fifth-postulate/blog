var path = require('path');
var markdown = require('markdown').markdown;
var qfs = require('promised-io/fs');
var handlebars = require('handlebars');

var config = require('./config.json');
var postRegExp = /[.]([^.]*)[.]md/;

qfs.readFile(config.TEMPLATES.index, 'utf8')
    .then(function(templateSource){
        return handlebars.compile(templateSource);
    })
    .then(function(template){
        qfs.readdir(config.POSTS_DIRECTORY)
            .then(function(posts){
                var input = '';
                posts.forEach(function(post){
                    var matches = post.match(postRegExp);
                    var name = matches ? matches[1] : post;
                    var link = path.basename(post, '.md') + '.html';
                    input += '* ';
                    input += '[' + name + '](' + link + ')\n';
                });
                var content = markdown.toHTML(input);
                var output = template({ 'content': content });
                var outputName = path.join(config.BLOG_DIRECTORY, 'index.html');
                return qfs.writeFile(outputName, output, 'utf8');
            })
            .then(function(){
                console.log('finished writing index.html');
            });
   });
