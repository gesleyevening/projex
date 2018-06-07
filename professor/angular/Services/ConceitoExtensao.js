angular.module('myApp').service('ConceitoExtensao', ['$http', 'UtilService', function($http, UtilService) {
    var listarArea = function(callback) {
        $http.get('api/ConceitoExtensao/buscarAtivos.php?idTipoConceito=1').then(function(response) {
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
    
    var listarObjetivo = function(callback) {
        $http.get('api/ConceitoExtensao/buscarAtivos.php?idTipoConceito=2').then(function(response) {
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
    
    var listarDesafios = function(callback) {
        $http.get('api/ConceitoExtensao/buscarAtivos.php?idTipoConceito=3').then(function(response) {
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
        listarArea: listarArea,
        listarObjetivo: listarObjetivo,
        listarDesafios: listarDesafios
    };
}]);
