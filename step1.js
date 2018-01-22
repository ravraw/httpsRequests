
//var https = require('https');


function getAndPrintHtmlChunks(){

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path:'/http-examples/step1.html'
  };


    https.get(requestOptions,function(response){
      response.setEncoding('utf8');

      response.on('data',function(data){
        console.log('chunk recieved Length ' + data.length);
         console.log(data + '\n');
      })

      response.on('end',function(){
        console.log('Response stream completed ');
      })

      response.on('finish',function(){
        console.log('Process finished');

      })

    })


};

getAndPrintHtmlChunks();