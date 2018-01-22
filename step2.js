
var https = require('https');

function getAndPrintHtml(){

  var requestOptions = {
    host: 'sytantris.github.io',
    path:'/http-examples/step2.html'
  };



  https.get(requestOptions,function(response){
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


    })


}

getAndPrintHtml();