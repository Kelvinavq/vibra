<?php


$correo = 'kvalera200244@gmail.com';
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];




include("alertas.php");


$para      = $correo;
$titulo    = 'Contacto - Vibra Digital';
$mensaje   = '
        
        Mensaje del formulario de contacto

        Nombre: ' . $nombre . ' 
        Teléfono: ' . $telefono . ' 
        Correo: ' . $correo . ' 

        Mensaje:   ' . $nombre . '

        ';
$cabeceras = 'From: Vibradigital@vibra.com' . "\r\n" .
    'Reply-To: Vibradigital@vibra.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($para, $titulo, $mensaje, $cabeceras)) {


    echo '
            <script>
            swal({
                title: "Se ha enviado tu mensaje",
                text: "En breves serás contactado por el equipo de Vibra Digital",
                icon: "success",
              })
              .then((ok) => {
                if (ok) {
                 window.location = "index.php"
                }else{
                 window.location = "index.php"
                }
              });
            </script>
            ';
};
