// Atividade 1
document.querySelector('.checkbox-label').addEventListener('click', function(event) {
    var checkbox = event.currentTarget.querySelector('.input-checkbox');
     var customCheckbox = event.currentTarget.querySelector('.custom-checkbox');
    if (checkbox.checked) {
     customCheckbox.classList.add('checked');
     } else {
     customCheckbox.classList.remove('checked');
     }
});

// Atividade 2
var label = document.querySelector('.checkbox-label');
label.addEventListener('click', function(event) {
 var checkboxInput = document.querySelector('.input-checkbox');
  var customCheckbox = document.querySelector('.custom-checkbox');
 if (checkboxInput.checked) {
  customCheckbox.classList.add('checked');
  } else {
  customCheckbox.classList.remove('checked');
  }
});

// Atividade 3
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
li.appendChild(checkbox);