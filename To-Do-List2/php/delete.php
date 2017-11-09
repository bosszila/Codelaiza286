<?php
include("connect.php");
$issue = $_REQUEST["issue"];
$sql = "DELETE FROM task WHERE issue = '".mysqli_real_escape_string($conn, $issue)."' "
$query = mysqli_query($conn, $sql);
header("Location:/To-Do-List2/to-do-list2.php");
mysqli_close($conn);
?>