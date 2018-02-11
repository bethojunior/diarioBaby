<?php 

    require "../service/conexao.php";
    $id = $_POST['id'];
    $titulo = $_POST['titulo'];
    $texto = $_POST['texto'];
    $login = $_POST['login'];
    $data = date("Y/m/d");

    $sql = "UPDATE diario SET titulo = '$titulo' , texto = '$texto' , data = '$data' , login = '$login' WHERE id = '$id' ";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }