jQuery(document).ready(function($){

    $('#coin').on('click', function(){
      var flipResult = Math.random();
      $('#coin').removeClass();
      setTimeout(function(){
        if(flipResult <= 0.5){
          $('#coin').addClass('heads');
          console.log('it is head');
          value1.push("head");
        }
        else{
          $('#coin').addClass('tails');
          console.log('it is tails');
          value2.push("Tails");
        }
      }, 100);
      
    });
    });

    function myFunction() {
        for (var i=0; i<value1.length; i++)
          console.log(i + ". " + value1[i]);
      
      
      }