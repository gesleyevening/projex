<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        
        $dados = R::find('situacao');
        
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>