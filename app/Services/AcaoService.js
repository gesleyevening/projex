function AcaoService($http, UtilService, $window) {
    var listarTodos = function(callback, id) {
        $http.get('api/Acao/buscarTodos.php').then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                alert(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };
    var listarPorId = function(callback, id) {
        $http.get('api/Acao/buscarPorId.php?id=' + id).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                alert(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    var cadastrar = function(callback, acao) {
        $http({
            method: "POST",
            data: acao,
            url: "api/Acao/salvar.php"
        }).then(function mySucces(response) {
            if (response.data.sucesso) {
                alert(response.data.mensagem);
                $window.location.href = 'cadastro.html';
            }
            else {
                UtilService.alertaErro(response.data.mensagem, false);
            }
        }, function myError(response) {
            alert("Ocorreu um erro ao tentar salvar.");
        });
    }
    var pesquisar = function(callback, acao) {
        $http({
            method: "POST",
            data: acao,
            url: 'api/Acao/pesquisar.php'
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                alert(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    return {
        cadastrar: cadastrar,
        listarTodos: listarTodos,
        listarPorId: listarPorId,
        pesquisar: pesquisar
    };
}
