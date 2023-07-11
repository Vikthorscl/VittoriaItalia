function recursoApipastas(){
    $.ajax(
        {
            url:"https://64ab04fc0c6d844abedf181e.mockapi.io/Pastas",
            dataType:"json",
            success:function(datos){
                console.log(datos)
                var contenedorPastas = $('#sushi')
                for (var dato in datos){
                    console.log(dato.nombre)
                }
                
            },
            error:function(){
                alert("No se pudo obtener la informacion")
            } 
        }
    )

}

function validaCampos() {
    var expresionRegularTelefonos = /^(\+?56)?(\s?)(0?9)(\s?)[1-9]\d{7}$/
    var contadorErrores = 0;
    var mensaje = ""
    var fecha = $('#fecha').val()
    var hora = $('#hora').val()
    var cantPersonas = $('#cantPersonas').val()
    var nombreContacto = $('#nombreContacto').val()
    var numeroContacto = $('#numeroContacto').val()
    //validar formato de fechas
    var fechaHoraActual = new Date();
    //validar formato de horas
    var fechaHoraIngresada = new Date(fecha + " "+ hora);

    //************************ VALIDACIONES ****************** */
    if(fechaHoraIngresada<fechaHoraActual){
        mensaje += "Debes ingresar una fecha y hora superior a la actual\n"
        contadorErrores++
    }

    if (fecha.length == 0) {
        mensaje += "Campo fecha es requerido\n"
        contadorErrores++
    } 
    if (cantPersonas <= 0 ) {
        mensaje += "La cantidad de personas debe ser mayor 0\n"
        contadorErrores++
    } 
    if (nombreContacto.length == 0 ) {
        mensaje += "Nombre contacto es requerido\n"
        contadorErrores++
    } 
    if (nombreContacto.length == 0 ) {
        mensaje += "Nombre contacto es requerido\n"
        contadorErrores++
    } 
    if (numeroContacto.length == 0 ) {
        mensaje += "Numero de contacto es requerido\n"
        contadorErrores++
    } 
    if (!numeroContacto.match(expresionRegularTelefonos)) {
        mensaje += "El numero de contacto no cumple con el formato establecido ej: +56XXXXXXXX\n"
        contadorErrores++
    } 
    /***************FIN VALIDACIONES ****************/ 
    if(contadorErrores==0){
        //alert("TU INFORMACION FUE ENVIADA EXITOSAMENTE "+contadorErrores)
        Swal.fire({
            icon: 'success',
            title: 'Reserva exitosa',
            text: "Tu reserva fue enviada exitosamente"
        })
    }else {
       //alert("DEBES RELLENAR LOS CAMPOS OBLIGATORIOS")
       Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: mensaje
        })
    }

    
    
    /*function funcionComentarios() {
        console.log("")
       alert("dejamos tus comentarios")
    }
    function funcionSuscripcion() {
        console.log("")
        alert("dejamos tus datos para la suscripcion")
    }*/
    
    
}
/*<script>
  document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });
</script>*/
/*var triggerEl = document.querySelector('#navId a')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name*/