<?php 

    require "../service/conexao.php";
    
    $titulo = $_POST['titulo'];
    $texto = $_POST['texto'];
    $data = date("Y/m/d");
    $login = $_POST['login'];

    $sql = "INSERT INTO diario (titulo , texto , data , login ) values ('$titulo' , '$texto' , '$data' , '$login')";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }