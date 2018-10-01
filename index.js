//(function() {
 // 'use strict';

  // YOUR CODE HERE

  var stopBtn = document.querySelector('#stopButton');
    var goBtn = document.querySelector('#goButton');
    var slowBtn = document.querySelector('#slowButton');
      var stopBtn = document.querySelector('#stopButton');

    var stopLt = document.querySelector('#stopLight');
      var slowLt = document.querySelector('#slowLight');
        var goLt = document.querySelector('#goLight');

      //  for(let i = 0; i < btn; i++){

         
     var btn = document.querySelector('.button');
        var bulb = document.querySelector('.bulb');


          stopBtn.addEventListener('click', function(e){
           stopLt.classList.toggle('stop');
           console.log(e.target);
      });
      


        slowBtn.addEventListener('click', function(e){
           slowLt.classList.toggle('slow');
               console.log(e.target);
      });

        goBtn.addEventListener('click', function(e){
           goLt.classList.toggle('go');
             console.log(e.target);
      });

     // }
//})();
