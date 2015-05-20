var $time = document.querySelector('.time');

function digitalClock(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  $time.textContent = hours + " : " + minutes + " : " + seconds;

}

digitalClock();

setInterval(digitalClock, 1000);

if(seconds<10) {
  "0" + seconds;
}

if(minutes<10){
  "0" + minutes;
}

if(hours<10){
  "0" + hours;
}

// if(seconds < 10){
//   "0"
// }
//
// }


// $.each(positions, function(){
//
//        if(this == ':'){
//            digit_holder.append('<div class="dots">');
//        }
//        else{
//
//            var pos = $('<div>');
//
//            for(var i=1; i<8; i++){
//                pos.append('<span class="d' + i + '">');
//            }
//
//            // Set the digits as key:value pairs in the digits object
//            digits[this] = pos;
//
//            // Add the digit elements to the page
//            digit_holder.append(pos);
//        }
//
//    });
