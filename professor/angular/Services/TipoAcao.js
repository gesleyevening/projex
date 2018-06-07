angular.module('myApp').service('TipoAcaoService', ['$http', 'UtilService',function($http, UtilService) {
    var listarTodos = function(callback) {
        $http.get('api/TipoAcao/buscarTodos.php').then(function(response) {
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