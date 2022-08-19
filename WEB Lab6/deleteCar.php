<?php
require_once "extra/config.php";
global $connection;

if (isset($_POST['id']) && !empty(trim($_POST['id']))) {
    $id = $_POST['id'];
    $sql_query = "DELETE FROM car WHERE carID=$id;";
    $result = mysqli_query($connection, $sql_query);

    if ($result) {
        header("Location: showCar.html");
    } else {
        echo "Error deleting car!";
        echo $_POST['id'];
    }
}
mysqli_close($connection);
