<?php
    if($_POST){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];

        $servername = "localhost";
        $username = "root";
        $dbname = "cursosql";

        $password = "";
        $conn= new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error){
            die("Connection failed: " . $conn -> connect_error);
        }
        
        $sql = "INSERT INTO usuario (nombre, apellido, email)
        VALUES ('$nombre', '$apellido', '$email')";

        if ($conn->query($sql) == TRUE){
            echo "<h1>Se ha creado el registro satisfactoriamente</h1>";
            echo "<div>Nombre: $nombre</div>";
            echo "<div>Correo electronico: $email</div>";

        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    }   
?>