angular.module('myApp').service('AcaoService', ['$http', 'UtilService', '$window', function($http, UtilService, $window) {
    var listarTodos = function(callback, id) {
        $http.get('api/Acao/buscarTodos.php').then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                console.log(response.data.mensagem);
            }
        }, function(response) {
            console.log("Erro: " + response.statusText);
        })
    };
    var listarPorId = function(callback, id) {
        $http.get('api/Acao/buscarPorId.php?id=' + id).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                console.log(response.data.mensagem);
            }
        }, function(response) {
            console.log("Erro: " + response.statusText);
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
            console.log("Ocorreu um erro ao tentar salvar.");
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
                console.log(response.data.mensagem);
            }
        }, function(response) {
            console.log("Erro: " + response.statusText);
        })
    };
    var meusProjetos = function(callback) {
        $http({
            method: "POST",
            data: acao,
            url: 'api/Acao/listarPorProfessor.php'
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                console.log(response.data.mensagem);
            }
        }, function(response) {
            console.log("Erro: " + response.statusText);
        })
    };
    var aguardandoAvaliacaoCoordenador = function(callback, acao) {
        $http({
            method: "POST",
            data: acao,
            url: 'api/Acao/listarPorCoordenador.php'
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                console.log(response.data.mensagem);
            }
        }, function(response) {
            console.log("Erro: " + response.statusText);
        })
    };
    var aguardandoAvaliacaoExtensao = function(callback, acao) {
        $http({
            method: "POST",
            data: acao,
            url: 'api/Acao/listarPorExtensao.php'
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                console.log(response.data.mensagem);
            }
        }, function(response) {
            console.log("Erro: " + response.statusText);
        })
    };

    return {
        cadastrar: cadastrar,
        listarTodos: listarTodos,
        listarPorId: listarPorId,
        pesquisar: pesquisar
    };
}]);
