const miBoton = document.getElementById('miBoton');

function handleClick(){
    alert('Hola Has hecho clic');
}

miBoton.addEventListener("click", function(){
    handleClick();
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {

  event.preventDefault();
  validateForm();

});

function validateEmail(email) {

    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
  }

function validateForm() {

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }