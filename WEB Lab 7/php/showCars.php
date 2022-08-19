<?php
require_once 'extra/config.php';

$model = $_GET["model"] ?? '';
$sql_query = "SELECT * FROM car WHERE model LIKE '%{$model}%';";
global $connection;
$result = mysqli_query($connection, $sql_query);

if ($result) {
    $number_of_rows = mysqli_num_rows($result);
    $cars = [];

    for ($i = 0; $i < $number_of_rows; $i++) {
        $row = mysqli_fetch_array($result);
        if (isset($row["model"]))
            $cars[] = array("model" => $row['model'], "horsePower" => (int)$row['horsePower'], "fuel" => $row['fuel'], "price" => (int)$row['price'], "color" => $row['color'], "manufacturingYear" => (int)$row['manufacturingYear'], "bodyStyle" => $row['bodyStyle'], "carID" => $row['carID']);
    }

    mysqli_free_result($result);
    echo json_encode($cars);
}
mysqli_close($connection);
