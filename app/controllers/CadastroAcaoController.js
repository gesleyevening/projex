function CadastroAcaoController($scope, $window,
    UsuarioService, ConceitoExtensaoService,
    SituacaoService, CursoService,
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

    UsuarioService.getUser(function(usuario) {
        $scope.user = usuario;
        /*if ($scope.user.id == 'undefined') {
            $window.location.href = '/login';
        }*/
    });



    $scope.cadastrar_acao = function() {
        AcaoService.cadastrar(function() {}, $scope.acao);
    }


    ConceitoExtensaoService.listarArea(function(areasTematicas) {
        $scope.areasTematicas = areasTematicas;
    });

    ConceitoExtensaoService.listarObjetivo(function(objetivosOnu) {
        $scope.objetivosOnu = objetivosOnu;
    });

    ConceitoExtensaoService.listarDesafios(function(desafiosBh2030) {
        $scope.desafiosBh2030 = desafiosBh2030;
    });
    SituacaoService.listarTodos(function(situacoes) {
        $scope.situacoes = situacoes;
    });
    TipoAcaoService.listarTodos(function(tiposAcaos) {
        $scope.tiposAcaos = tiposAcaos;
    });
    CursoService.listarTodos(function(cursos) {
        console.log(cursos);
        $scope.cursos = cursos;
    });


}
