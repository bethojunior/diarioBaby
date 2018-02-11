<?php 

    require "../service/conexao.php";
    
    $id = $_POST['id'];

    $sql = mysqli_query($conexao , "DELETE FROM diario WHERE id = '$id'");

    if($sql){
        echo true;
    } else {
        echo false;
    }