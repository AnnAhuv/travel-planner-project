
function addField() {
    const form = document.getElementById('form');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    form.appendChild(input);
  }
  
  function submitForm() {
    const inputs = document.querySelectorAll('#form input');
    let allFilled = true;
    let message = '';
  
    inputs.forEach((input, index) => {
      if (!input.value) {
        allFilled = false;
      }
      message += input.value;
      if (index < inputs.length - 1) {
        message += ', ';
      }
    });
  
    if (!allFilled) {
      alert('Please fill all fields');
    } else {
      alert('Entered values: ' + message);
    }
  }
  