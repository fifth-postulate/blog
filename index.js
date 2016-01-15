var fs = require('fs');

fs.readdir('posts', function(error, data){
    if (error) throw error;

    console.log(data);
});
