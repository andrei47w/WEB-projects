<?php
//require_once "extra/config.php";
//$carID = $_POST['id'];
//$model = $_POST['model'];
//$horsePower = $_POST['horsePower'];
//$fuel = $_POST['fuel'];
//$price = $_POST['price'];
//$color = $_POST['color'];
//$manufacturingYear = $_POST['manufacturingYear'];
//$bodyStyle = $_POST['bodyStyle'];
//$sql_query = "UPDATE car SET model='$model', horsePower = '$horsePower', fuel = '$fuel', price = $price, color = '$color', manufacturingYear = '$manufacturingYear', bodyStyle = '$bodyStyle' where carID = $carID";
//global $connection;
//$result = mysqli_query($connection, $sql_query);
//if ($result) {
//    echo "The car was updated successfully!";
//    header("Location: showCar.html");
//} else {
//    echo "Error updating!";
//}
//mysqli_close($connection);


header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
require_once "extra/config.php";
if (isset($_POST['model']) && !empty(trim($_POST['model']))) {
    $carID = $_POST['id'];
    $model = $_POST['model'];
    $horsePower = $_POST['horsePower'];
    $fuel = $_POST['fuel'];
    $price = $_POST['price'];
    $color = $_POST['color'];
    $manufacturingYear = $_POST['manufacturingYear'];
    $bodyStyle = $_POST['bodyStyle'];
    $sql_query = "UPDATE car SET model='$model', horsePower = '$horsePower', fuel = '$fuel', price = $price, color = '$color', manufacturingYear = '$manufacturingYear', bodyStyle = '$bodyStyle' where carID = $carID";
    global $connection;
    $result = mysqli_query($connection, $sql_query);
    mysqli_close($connection);
} else {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $carID = $request->carID;
    $model = $request->model;
    $horsePower = $request->horsePower;
    $fuel = $request->fuel;
    $price = $request->price;
    $color = $request->color;
    $manufacturingYear = $request->manufacturingYear;
    $bodyStyle = $request->bodyStyle;
    $sql_query = "UPDATE car SET model='$model', horsePower = '$horsePower', fuel = '$fuel', price = $price, color = '$color', manufacturingYear = '$manufacturingYear', bodyStyle = '$bodyStyle' where carID = $carID";
    global $connection;
    $result = mysqli_query($connection, $sql_query);
    mysqli_close($connection);
}
