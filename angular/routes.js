function RouteConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/principal.html",
            controller: "dadosController"
        })
        
        .otherwise({
            redirectTo: "/"
        });
}