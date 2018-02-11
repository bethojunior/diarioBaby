<?php 

    require "../service/conexao.php";

    $sql = "SELECT * FROM diario ORDER BY id DESC";
    $dados = mysqli_query($conexao , $sql);
    $array = [];
    while($result = mysqli_fetch_object($dados)){
        $all[] = $result;
    }  
    echo json_encode($all);