<?php
$host = "localhost";
$user = "id3547174_todolist";
$passwd = "3h1499";
$db = "id3547174_todolist";

$conn = new mysqli($host, $user, $passwd, $db);
mysqli_set_charset($conn,"utf8");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>