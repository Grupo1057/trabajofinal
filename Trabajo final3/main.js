// const { default: jsPDF } = require("jspdf");
// const nombre = document.getElementById('nombre').value;
// const apellido = document.getElementById('apellido').value;
// const email = document.getElementById('email').value;
// const dni = document.getElementById('dni').value;
// const telefono = document.getElementById('telefono').value;
// const cantidad = document.getElementById('cantidad').value;

document.addEventListener('DOMContentLoaded', function(){

    $('#formularioReserva').validate({
        rules:{
            nombre: 'required',
            apellido: 'required',
            email: 'required',
            dni: 'required',
            telefono: 'required',
            cantidad:'required'
        },
        messages:{
            nombre: 'Por favor ingrese su nombre',
            apellido: 'Por favor ingrese su apellido',
            email:'Por favor ingrese su correo electrónico',
            dni: 'Por favor ingrese su numero de identidad',
            telefono: 'Por favor ingrese su numero de contacto',
            cantidad: 'Ingrese cantidad de lugares'
        },
        submitHandler: function(form){
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;
            var dni = document.getElementById('dni').value;
            var telefono = document.getElementById('telefono').value;
            var cantidad = document.getElementById('cantidad').value;

                      
            var pdfImpreso = `La reserva realizada por la persona ${nombre} ${apellido} fue realizada con exito \n y se registro con el numero ${dni}450`
            var pdf = new jsPDF();

            pdf.text(pdfImpreso,10,10);
            var pdfBlob = pdf.output('blob')

            var downloadLinkPdf = document.createElement('a');
            downloadLinkPdf.href = URL.createObjectURL(pdfBlob);
            downloadLinkPdf.download = 'resumen_reserva.pdf';
            downloadLinkPdf.click();


            URL.revokeObjectURL(pdfBlob)
    
        }
    })
    // VALIDACIONES
    $('#formularioReserva').validate({
        rules:{
            nombre: 'required',
            apellido: 'required',
            email: {
                required: true,
                email: true
            },
            dni: 'required',
            telefono: 'required',
            cantidad:'required'
        },
        messages:{
            nombre: 'Por favor ingrese su nombre',        
            apellido: 'Por favor ingrese su apellido',
            email:{required:'Por favor ingrese su correo electrónico',
                   email:'Por favor ingrese uan dirección de correo electrónico válida' 
                  },
            dni: 'Por favor ingrese su numero de identidad',
            telefono: 'Por favor ingrese su numero de contacto',
            cantidad: 'Ingrese cantidad de lugares'
        },
        submitHandler:function(form){
            var nombre = document.getElementById('nombre').val();
            var apellido = document.getElementById('apellido').val();
            var email = document.getElementById('email').val();
            var dni = document.getElementById('dni').val();
            var telefono = document.getElementById('telefono').val();
            var cantidad = document.getElementById('cantidad').val();
                
            $.ajax({
                url:'https://reqres.in/api/users?page=2',
                method: 'POST',
                data:{
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    dni: dni,
                    telefono: telefono,
                    cantidad: cantidad
                },
                success: function(response){
                    console.log('Éxito', response);
                    alert('Reserva realizada con exito')
                },
                error: function(xhr,status,error){
                    console.log('Error:', error);
                    alert('Error al realizar la reserva. Por favor inténtelo nuevamente')
                }
            })
        },
    
    })
})

// function guardarDatos() {
//     var nombre = document.getElementById("inputName").value;
//     var comentario = document.getElementById("inputComment").value;
//     var datos = `Bienvenido ${nombre}!!`
//     document.getElementById("datos").innerHTML = datos;
//     $('#exampleModal').modal('hide');
//   }

function abrirModal() {
    $('#exampleModal').modal('show');
  }

  function guardarDatos() {
    var nombre = document.getElementById("inputName").value;
    var comentario = document.getElementById("inputComment").value;
    var datos = `Bienvenido ${nombre}!! Hace tu reserva `
    document.getElementById("datos").innerHTML = datos;
    $('#exampleModal').modal('hide');
  }