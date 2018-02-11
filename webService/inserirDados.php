<?php 

    require "../service/conexao.php";
    
    $titulo = $_POST['titulo'];
    $texto = $_POST['texto'];
    $data = date("Y/m/d");

    $sql = "INSERT INTO diario (titulo , texto , data) values ('$titulo' , '$texto' , '$data)";
    $exc = mysqli_query($conexao , $sql);

    if($exc){
        echo true;
    } else {
        echo false;
    }