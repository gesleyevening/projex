angular.module('myApp').controller('dadosController', 
['$scope', '$http', '$window', '$localStorage', '$sessionStorage', 'UsuarioService', 'ConceitoExtensao', 'SituacaoService', 'CursoService',
    'TipoAcaoService', 'UtilService', 'AcaoService',
    function($scope, $http, $window, $localStorage, $sessionStorage, UsuarioService, ConceitoExtensao, SituacaoService, CursoService,
        TipoAcaoService, UtilService, AcaoService) {
        $scope.acao = {};
        
        /* PARA FACILITAR OS TESTES */
        $scope.acao.tipoAcao = 1;
        $scope.acao.titulo = "Projeto de teste";
        $scope.acao.descricao = "Descrição de um projeto de teste";
        $scope.acao.objetivo = "Objetivos gerais do projeto de teste";
        $scope.acao.publicoAlvo = "Professores, alunos e funcionários";
        $scope.acao.local = "Campos Silva Lobo";
        //$scope.acao.dataInicio = new Date(2017, 11, 01);
        $scope.acao.palavrasChave = "Projeto, Newton Paiva, Sou Newton, SI";
        $scope.acao.atividades = "Arquitetura, Engenharia, TI";

        
        $scope.sair = function() {
            UsuarioService.sair();
        }
        $scope.user = {};
        
        UsuarioService.getUser( function(usuario) {
            $scope.user = usuario;
            if($scope.user.id=='undefined'){
                $window.location.href = 'login.html';
            }
        });



        $scope.cadastrar_acao = function() {
            AcaoService.cadastrar(function(){}, $scope.acao);
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
