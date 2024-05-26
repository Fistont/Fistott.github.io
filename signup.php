<?php

// Database connection details (replace with your actual credentials)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data (sanitize and validate before using)
$username = $_POST["username"];
$email = $_POST["email"];
$password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash password for security

// Prepare SQL statement (consider using prepared statements for security)
$sql = "INSERT INTO users (username, email, password)
VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>