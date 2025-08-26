<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $reason = htmlspecialchars(trim($_POST["reason"]));
    $message = htmlspecialchars(trim($_POST["Message"]));

    if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($reason) && !empty($message)) {
        
        $stmt = $conn->prepare("INSERT INTO messages (name, email, reason, message) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $reason, $message);

        if ($stmt->execute()) {
            echo "Tu mensaje ha sido guardado correctamente.";
        } else {
            echo "Error al guardar: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Por favor completa todos los campos correctamente.";
    }

    $conn->close();
} else {
    echo "No se recibieron datos.";
}
?>
