function AcaoController($scope, $sessionStorage, UsuarioService, AcaoService, TipoAcaoService) {

        $scope.$storage = $sessionStorage;
        $scope.acao = {};

        paramsObject = {};
        window.location.search.replace(/\?/, '').split('&').map(function(o) {
            paramsObject[o.split('=')[0]] = o.split('=')[1]
        });


        $scope.sair = function() {
            UsuarioService.sair();
        }
        $scope.user = {};

        UsuarioService.getUser(function(usuario) {
            $scope.user = usuario;
        });


        $scope.sair = function() {
            UsuarioService.sair();
        }
          
          
           
        AcaoService.listarPorId(function(acao) {
            $scope.acao = acao[0];
        }, paramsObject.id);        
        
        
    }