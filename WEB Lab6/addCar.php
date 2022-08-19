<?php
require_once "extra/config.php";
$model = $_POST['model'];
$hp = $_POST['hp'];
$fuel = $_POST['fuel'];
$price = $_POST['price'];
$color = $_POST['color'];
$year = $_POST['year'];
$style = $_POST['style'];
$sql_query = "INSERT INTO car(model, horsePower, fuel, price, color, manufacturingYear, bodyStyle) VALUES ('$model', '$hp', '$fuel', $price, '$color', '$year', '$style')";

//  statement sanitizing
$model = filter_var($model, FILTER_SANITIZE_STRING);
$hp = filter_var($hp, FILTER_SANITIZE_NUMBER_INT);
$fuel = filter_var($fuel, FILTER_SANITIZE_STRING);
$price = filter_var($price, FILTER_SANITIZE_NUMBER_INT);
$color = filter_var($color, FILTER_SANITIZE_STRING);
$year = filter_var($year, FILTER_SANITIZE_NUMBER_INT);
$style = filter_var($style, FILTER_SANITIZE_STRING);

// validating email
if (!filter_var($hp, FILTER_VALIDATE_INT) === false &&
    !filter_var($price, FILTER_VALIDATE_INT) === false &&
    !filter_var($year, FILTER_VALIDATE_INT) === false) {

    global $connection;
    $result = mysqli_query($connection, $sql_query);

    if ($result) {
        echo "The car was added successfully!";
        header("Location: showCar.html");
    } else {
        echo "Failed to add car!";
    }

} else {
    echo("invalid input");
}

mysqli_close($connection);