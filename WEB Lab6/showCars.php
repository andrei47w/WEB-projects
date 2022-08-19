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
            $cars[] = array($row['model'], $row['horsePower'], $row['fuel'], $row['price'], $row['color'], $row['manufacturingYear'], $row['bodyStyle'], $row['carID']);
    }

    mysqli_free_result($result);
    echo json_encode($cars);
}
mysqli_close($connection);
