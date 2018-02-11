<?php 

    require "../service/conexao.php";
    $login = $_POST['login'];
    
    $sql = "SELECT * FROM diario WHERE login = '$login' ORDER BY id DESC";
    $dados = mysqli_query($conexao , $sql);
    $array = [];
    while($result = mysqli_fetch_object($dados)){
        $all[] = $result;
    }  
    echo json_encode($all);