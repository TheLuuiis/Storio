<?php
// Configuración de la base de datos
$servername = "localhost";   // En XAMPP/WAMP/MAMP suele ser "localhost"
$username = "root";          // Usuario por defecto en phpMyAdmin
$password = "";              // Contraseña (en XAMPP por defecto está vacío)
$dbname = "datosstorio";    // Nombre de tu base de datos creada en phpMyAdmin

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Si quieres confirmar que funciona, puedes activar esta línea temporalmente:
// echo "✅ Conexión exitosa a la base de datos";
?>
