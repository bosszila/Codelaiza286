<?php
include("php/connect.php");
$sql_complete = "SELECT * FROM `task` WHERE status = 1;";
$sql_incomplete = "SELECT * FROM `task` WHERE status = 0;";
$q_comp = mysqli_query($conn, $sql_complete);
$q_incomp = mysqli_query($conn, $sql_incomplete);
?>

<html>
    <head>
    <title>Todo List</title>
         <link rel="stylesheet" href="css-to-do-list.css">
          <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
          <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
   
        <style>
        </style>
    </head>
<body>

    <div class="container">
      <p>
          <label for="new-task">Add Item</label>
          <form action="php/insert.php" method="post">
            <input id="new-task" type="text" name="issue">
            <input class="btn btn-info" type="submit" value="Add">
        </form>
      </p>

      <h3>Todo</h3>
      <ul id="incomplete-tasks">
      <?php
      $nowDate = date("Y-m-d");
        while($row = mysqli_fetch_array($q_incomp,MYSQLI_NUM)){
            echo '<form>';
            echo '<li> <input type="checkbox">
            <label>'.$row[1].'</label>
            <input type="text"  value="'.$row[3].'">
            <button class="edit">Edit</button>
            <input>
            <button class="note">Note</button>
            <input type="date" min='.$nowDate.' value='.$nowDate.'>
            <button class="date">Date</button>
            <button class="delete">Delete</button>
            <input type="hidden" value="' .$row[0]. '">
            </li>';
            echo '</form>';
        }
      ?>
      </ul>

      <h3>Done</h3>
      <ul id="completed-tasks">
      <?php
       $nowDate = date("Y-m-d");
        while($row = mysqli_fetch_array($q_comp,MYSQLI_NUM)){
            echo '<form>';
            echo '<li> <input type="checkbox">
            <label>'.$row[1].'</label>
            <input type="text"  value="'.$row[3].'">
            <button class="edit">Edit</button>
            <input>
            <button class="note">Note</button>
            <input type="date">
            <input type="date" min='.$nowDate.' value='.$nowDate.'>
            <button class="delete">Delete</button>
            <input type="hidden" value="' .$row[0]. '">
            </li>';
            echo '</form>';
        }
      ?>
      </ul>
    </div>
  <script src="js-to-do-list.js"></script>

  </body>
    </html>
    
