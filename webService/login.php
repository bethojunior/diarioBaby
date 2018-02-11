
<?php

require_once "../service/conexao.php";

$login = 'hellen';
$pass = 'hellen';


$sql = mysqli_query($conexao , "SELECT * FROM  users WHERE login = '$login' and pass = '$pass'") or die (mysqli_error($conexao));

//$dados = mysqli_query($conexao , $sql);
$result = mysqli_fetch_object($sql);
echo json_encode($result);