<?php 

    require "../service/conexao.php";

    $sql = "SELECT * FROM diario";
    $dados = mysqli_query($conexao , $sql);
    
    $dados1 = array('id' => $result['id'] , 'titulo' => $result['titulo'] , 'texto' => $result['texto']);
    foreach ($dados as $tes ) {
        $tess = [];
        echo json_encode($tes);
    }
    