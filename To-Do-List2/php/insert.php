<?php
include("connect.php");
$issue = $_REQUEST["issue"];
$sql = "INSERT INTO `task`(`issue`, `status`) VALUES ('".mysqli_real_escape_string($conn, $issue)."',0);";
$query = mysqli_query($conn, $sql);
header("Location:/To-Do-List2/to-do-list2.php");
mysqli_close($conn);
?>