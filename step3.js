

var https = require('https');

var options = {
    host: 'sytantris.github.io',
    path:'/http-examples/step3.html'
  };




function getAndPrintHtml(options){

  https.get(options,function(response){
    response.setEncoding('utf8');

    var responseRecieved  = '';

    response.on('data',function(data){

      responseRecieved += data.toString();
      console.log('Recieved data length:' + data.length);

    })

      response.on('end',function(){
        console.log('Response stream completed ');
        console.log(responseRecieved);
      })


      response.on('finish',function(){
        console.log('Process finished');

      })

      response.on('error',function(){
        console.log('Process finished');

      })


    })


}

getAndPrintHtml(options);