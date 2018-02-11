
<?php

require_once "../service/conexao.php";

$login = $_GET['login'];
$pass = $_GET['pass'];


$sql = mysqli_query($conexao , "SELECT * FROM  users WHERE login = '$login' and pass = '$pass'") or die (mysqli_error($conexao));

$result = mysqli_fetch_object($sql);
echo json_encode($result);