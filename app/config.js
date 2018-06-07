var app = angular.module('myApp', ["ngRoute"]);

app.service('UtilService', UtilService);
app.service('AcaoService', AcaoService);
app.service('ConceitoExtensaoService', ConceitoExtensaoService);
app.service('CursoService', CursoService);
app.service('SituacaoService', SituacaoService);
app.service('TipoAcaoService', TipoAcaoService);
app.service('UsuarioService', UsuarioService);

app.controller('AcaoController', AcaoController);
app.controller('CadastroAcaoController', CadastroAcaoController);
app.controller('IndexController', IndexController);
app.controller('PesquisairController', PesquisarController);
app.controller('UsuarioController', UsuarioController);


app.config(RouteConfig);
app.run(function($rootScope) {
    $rootScope.typeOf = function(value) {
        return typeof value;
    };
})
/*
app.directive('selectWatcher', function($timeout) {
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
});*/
app.directive('menuAdm', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/commons/menuadm.html'
    };
});
app.directive('menuTopo', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/commons/menutopo.html'
    };
});
app.directive('menuProf', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/commons/menuprof.html'
    };
});
app.directive('menuComum', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/commons/menucomum.html'
    };
});
app.directive('menuCoor', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/commons/menucoor.html'
    };
});
app.directive('icheck', function($timeout, $parse) {
    return {
        require: 'ngModel',
        link: function($scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value;
                value = $attrs['value'];

                $scope.$watch($attrs['ngModel'], function(newValue) {
                    $(element).iCheck('update');
                });

                $scope.$watch($attrs['ngDisabled'], function(newValue) {
                    $(element).iCheck(newValue ? 'disable' : 'enable');
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'

                }).on('ifChanged', function(event) {
                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                        $scope.$apply(function() {
                            return ngModel.$setViewValue(event.target.checked);
                        })
                    }
                }).on('ifClicked', function(event) {
                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                        return $scope.$apply(function() {
                            //set up for radio buttons to be de-selectable
                            if (ngModel.$viewValue != value)
                                return ngModel.$setViewValue(value);
                            else
                                ngModel.$setViewValue(null);
                            ngModel.$render();
                            return
                        });
                    }
                });
            });
        }
    };
});
app.directive('scrollDir', function() {
    return {
        link: function(scope, elem) {
            elem.mCustomScrollbar({
                theme: 'dark',
                alwaysShowScrollbar: 0,
                advanced: {
                    updateOnContentResize: true
                }
            });
        }
    };
});
