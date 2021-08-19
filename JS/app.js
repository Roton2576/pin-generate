function generatePin() {
     let pin = Math.round(Math.random() * 10000);
     let pinString = pin + '';
     if(pinString.length == 4) {
          return pin;
     } else {
          return generatePin();
     }
}



document.getElementById('generatePin').addEventListener('click', function() {
     let pin = generatePin();
     document.getElementById('display-pin').value = pin;
});



document.getElementById('key-pad').addEventListener('click', function(e) {
     let number = e.target.innerText;
     let typeNumber = document.getElementById('type-number');
     if(isNaN(number)) {
          if(number == 'C') {
               typeNumber.value = '';
          }
     } else {
          let typeNumberValue = typeNumber.value;
          let newTypeNumber = typeNumberValue + number;
          typeNumber.value = newTypeNumber;
     }
});




function veryfiPin() {
     let pin = document.getElementById('display-pin').value;
     let typeNumber = document.getElementById('type-number').value;

     let successNotify = document.getElementById('notify-success');
     let errorNotify = document.getElementById('notify-faild');

     if(pin == typeNumber) {
          successNotify.style.display = 'block';
          errorNotify.style.display = 'none';
     } else {
          errorNotify.style.display = 'block';
          successNotify.style.display = 'none';
     }
}