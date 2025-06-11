<?php
header('content-type: application/json');
require('connect.php');

$stmt = $conn->query("SELECT * FROM Projects");
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
   if(!$result) {
            echo "No posts found!";
            header("HTTP/1.1 404 Not Found");
          }
          else {
            echo json_encode($result);
            header("HTTP/1.1 200 OK");

        }
 ?>
