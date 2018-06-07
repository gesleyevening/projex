angular.module('myApp').controller('dadosController',[ 
    '$scope', '$http', '$localStorage', '$sessionStorage', 'UsuarioService',
    function($scope, $http, $localStorage, $sessionStorage, UsuarioService) {
    $scope.sair = function() {
            UsuarioService.sair();
        }
        $scope.user = {};
        
        UsuarioService.getUser( function(usuario) {
            $scope.user = usuario;
        });
    $scope.logar = function() {
        UsuarioService.logar(function(user){
            $scope.user = user[0];
        }, $scope.login);
    };
}]);
