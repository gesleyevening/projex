angular.module('myApp').service('CursoService', ['$http', 'UtilService',function($http, UtilService) {
    var listarTodos = function(callback) {
        $http.get('api/Curso/buscarAtivos.php').then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                UtilService.alertaErro(response.data.mensagem, false);
            }
        }, function(response) {
            UtilService.alertaErro("Erro: " + response.statusText);
        })
    };
    return {
        listarTodos: listarTodos
    };
}]);