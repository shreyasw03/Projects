
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 200,
    easing: 'easeInOutCubic'
    });


var input = document.getElementById('input');
var label = document.querySelector('.input-label');

label.addEventListener('click', function(e){
      input.focus();
})

input.addEventListener('focus', function() {
  label.classList.add('active');
  input.setAttribute('placeholder', 'John Smith');
});
input.addEventListener('blur', function() {
  if (input.value === '') {
    label.classList.remove('active');
    input.removeAttribute('placeholder');
  }
});


var input1 = document.getElementById('input1');
var label1 = document.querySelector('.input-label1');

label1.addEventListener('click', function(e){
  input1.focus();
})

input1.addEventListener('focus', function() {
    label1.classList.add('active1');
    input1.setAttribute('placeholder', 'Johnsmith@example.com');
  });
  input1.addEventListener('blur', function() {
    if (input1.value === '') {
      label1.classList.remove('active1');
      input1.removeAttribute('placeholder');
    }
  });


var input2 = document.getElementById('input2');
var label2 = document.querySelector('.input-label2');

label2.addEventListener('click', function(e){
  input2.focus();
})

  input2.addEventListener('focus', function() {
    label2.classList.add('active2');
    input2.setAttribute('placeholder', 'Abc Company');
  });
  input2.addEventListener('blur', function() {
    if (input2.value === '') {
      label2.classList.remove('active2');
      input2.removeAttribute('placeholder');
    }
  });


var input3 = document.getElementById('input3');
var label3 = document.querySelector('.input-label3');

label3.addEventListener('click', function(e){
  input3.focus();
})

  input3.addEventListener('focus', function() {
    label3.classList.add('active3');
    input3.setAttribute('placeholder', '1 800 123 4567');
  });
  input3.addEventListener('blur', function() {
    if (input3.value === '') {
      label3.classList.remove('active3');
      input3.removeAttribute('placeholder');
    }
  });


  var input4 = document.getElementById('input4');
var label4 = document.querySelector('.input-label4');

label4.addEventListener('click', function(e){
  input4.focus();
})

  input4.addEventListener('focus', function() {
    label4.classList.add('active4');
    input4.setAttribute('placeholder', 'Your message...');
  });
  input4.addEventListener('blur', function() {
    if (input4.value === '') {
      label4.classList.remove('active4');
      input4.removeAttribute('placeholder');
    }
  });



