// import {  jsPDF } from("jspdf");
// import validate from "validate.js";


const form = document.querySelector('form');
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const dni = document.getElementById('dni').value;
const telefono = document.getElementById('telefono').value;
const cantidad = document.getElementById('cantidad').value;
const errorFormulario = document.getElementById('errorInput');
const constraints = {
    nombre: {
      presence: true,
      length: {
        minimum: 2,
        message: "El nombre debe tener al menos 2 caracteres"
      }
    },
    apellido: {
      presence: true,
      length: {
        minimum: 2,
        message: "El apellido debe tener al menos 2 caracteres"
      }
    },
    email: {
      presence: true,
      email: true,
      message: "El correo electrónico no es válido"
    },
    dni: {
      presence: true,
      length: {
        minimum: 7,
        message: "El DNI debe tener al menos 7 caracteres"
      }
    },
    telefono: {
      presence: true,
      length: {
        minimum: 9,
        message: "El teléfono debe tener al menos 9 caracteres"
      }
    },
    cantidad: {
      presence: true,
      numericality: {
        onlyInteger: true,
        greaterThan: 0,
        message: "La cantidad de reservas debe ser un número entero mayor que 0"
      }
    }
  };
  

form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
      
        for (const [key, value] of formData.entries()) {
          data[key] = value;
        }
      
        const errors = validate(data, constraints);
      
        if (errors) {
          mostrarErrores(errors);
        } else {
          // enviar formulario
        }
      });
      
      function mostrarErrores(errors) {
        const errorList = document.getElementById('error')
        errorList.innerHTML = "";
      
        Object.keys(errors).forEach(function(key) {
          const errorMessage = errors[key][0];
          const errorItem = document.createElement("li");
          errorItem.innerText = errorMessage;
          errorList.appendChild(errorItem);
        });
      }

    //     if (!validarNombre(nombre)) {
    //         alert('El nombre es inválido');
    //         return;
    //     }

    //     if (!validarApellido(apellido)) {
    //         alert('El apellido es inválido');
    //         return;
    //     }

    //     if (!validarEmail(email)) {
    //         alert('El email es inválido');
    //         return;
    //     }

    //     if (!validarDNI(dni)) {
    //         alert('El DNI es inválido');
    //         return;
    //     }

    //     if (!validarTelefono(telefono)) {
    //         alert('El teléfono es inválido');
    //         return;
    //     }

    //     if (!validarCantidad(cantidad)) {
    //         alert('Seleccione la cantidad de personas')
    //         return
    //     }

    //     var pdf = new jsPDF()
        
    //     pdf.text(20,20 `Nombre: ${nombre}`);
    //     pdf.text(20,20 `Apellido: ${apellido}`);
    //     pdf.text(20,20 `Email: ${email}`);
    //     pdf.text(20,20 `Numero de documento: ${dni}`);
    //     pdf.text(20,20 `Telefono: ${telefono}`);
    //     pdf.text(20,20 `Cantidad de personas: ${cantidad}`);

    //     pdf.save("formulario.pdf")
    //     console.log("form guardado");
        
    // }


