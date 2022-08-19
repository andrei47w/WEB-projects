<?php
$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "carshop";
$connection = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

//$sql_query = "SELECT * FROM car;";
//$result = mysqli_query($connection, $sql_query);
//while ($row = mysqli_fetch_assoc($result))
//{
//    echo $row['model'];
//}


if ($connection === false) {
    die("ERROR: Could not connect." . mysqli_connect_error());
}
