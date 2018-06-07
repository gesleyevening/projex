function UsuarioController($scope, UsuarioService) {
    $scope.sair = function() {
        UsuarioService.sair();
    }
    $scope.user = {};

    UsuarioService.getUser(function(usuario) {
        $scope.user = usuario;
    });
    $scope.logar = function() {
        UsuarioService.logar(function(user) {
            $scope.user = user[0];
        }, $scope.login);
    };
}
