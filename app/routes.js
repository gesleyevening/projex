function RouteConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/view/principal.html",
            controller: "IndexController"
        })
        .when("/acao/:id", {
            templateUrl: "app/view/acao.html",
            controller: "AcaoController"
        })
        
        .when("/ajuda", {
            templateUrl: "app/view/ajuda.html",
            controller: "IndexController"
        })
        
        .when("/cadastrar_acao", {
            templateUrl: "app/view/cadastro.html",
            controller: "CadastroAcaoController"
        })
        
        .when("/contato", {
            templateUrl: "app/view/contato.html",
            controller: "IndexController"
        })
    
        .when("/login", {
            templateUrl: "app/view/login.html",
            controller: "UsuarioController"
        })
        
        .when("/pesquisar_acao", {
            templateUrl: "app/view/pesquisar.html",
            controller: "PesquisairController"
        })
        
        .otherwise({
            redirectTo: "/"
        });
}