


module.exports = function getHTML (options, callback) {

  var https = require('https');

  https.get(options,function(response){
    response.setEncoding('utf8');

    var responseRecieved  = '';

    response.on('data',function(data){

      responseRecieved += data.toString();
      console.log('Recieved data length:' + data.length);

    })

      response.on('end',function(){
        console.log('Response stream completed ');
        callback(responseRecieved);
      })


      response.on('finish',function(){
        console.log('Process finished');

      })

      response.on('error',function(){
        console.log('Process finished');

      })


    })

};