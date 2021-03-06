function SituacaoService($http) {
    var listarTodos = function(callback) {
        $http.get('api/Situacao/buscarTodas.php').then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                alert(response.data.mensagem, false);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };
    return {
        listarTodos: listarTodos
    };
}