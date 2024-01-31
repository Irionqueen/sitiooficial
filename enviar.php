<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "jordypersonal2024@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $asunto = "Mensaje del sitio web";

    $carta = "De: $nombre \n";
    $carta .= "Correo: $email \n";
    $carta .= "Mensaje: $mensaje";

    mail($destinatario, $asunto, $carta);
    header('contacto.html'); // Redirige a una página de confirmación
}
?>
