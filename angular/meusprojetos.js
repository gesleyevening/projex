angular.module('myApp').controller('dadosController', 
['$scope', '$http', '$localStorage', '$sessionStorage', 'UsuarioService', 'ConceitoExtensao', 'SituacaoService',
    'TipoAcaoService', 'CursoService', 'AcaoService',
    function($scope, $http, $localStorage, $sessionStorage, UsuarioService, ConceitoExtensao, SituacaoService,
        TipoAcaoService, CursoService, AcaoService) {
        $scope.pesquisa = {};
        $scope.$storage = $sessionStorage;

        $scope.sair = function() {
            UsuarioService.sair();
        }
        $scope.user = {};

        UsuarioService.getUser(function(usuario) {
            $scope.user = usuario;
        });



        $scope.pesquisar = function() {
            AcaoService.pesquisar(function(acao) {
                $scope.acao = acao;
            }, $scope.pesquisa)
        }

        ConceitoExtensao.listarArea(function(areasTematicas) {
            $scope.areasTematicas = areasTematicas;
        });

        ConceitoExtensao.listarObjetivo(function(objetivosOnu) {
            $scope.objetivosOnu = objetivosOnu;
        });

        ConceitoExtensao.listarDesafios(function(desafiosBh2030) {
            $scope.desafiosBh2030 = desafiosBh2030;
        });
        SituacaoService.listarTodos(function(situacoes) {
            $scope.situacoes = situacoes;
        });
        TipoAcaoService.listarTodos(function(tiposAcaos) {
            $scope.tiposAcaos = tiposAcaos;
        });
        CursoService.listarTodos(function(cursos) {
            $scope.cursos = cursos;
        });
    }
]);

angular.module('myApp').directive('selectWatcher', function($timeout) {
    return {
        link: function(scope, element, attr) {
            var last = attr.last;
            if (last === "true") {
                $timeout(function() {
                    $(element).parent().selectpicker('val', 'any');
                    $(element).parent().selectpicker('refresh');
                });
            }
        }
    };
});

$(window).bind("load", function() {
    return $('select').selectpicker();
});
