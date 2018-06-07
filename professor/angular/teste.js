var app = angular.module('myApp', ["ngStorage"]);
    
    app.controller('dadosController', function($scope, $http, $localStorage, $sessionStorage, $window) {
            $scope.acao = {};
            $scope.$storage = $sessionStorage;
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
            
            
            $scope.sair = function(){
                delete $scope.$storage.user;
                delete $localStorage.user;
            }
            
            $scope.alertaErro = function(msg, r) {
                if(r){
                    var alerta = '<div class="alert alert-success" role="alert">'
                                +'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
                                +'<strong>Sucesso!</strong> '+ msg
                            +'</div>';
                }else{
                    var alerta = '<div class="alert alert-danger" role="alert">'
                                +'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'
                                +'<strong>Erro!</strong> '+ msg
                            +'</div>';
                }                ;
                angular.element(document.getElementById('msg')).html(alerta);
 
            }
            
            $scope.cadastrar_acao = function() {
                $http({
                    method : "POST",
                    data : $scope.acao,
                    url : "api/Acao/salvar.php"
                }).then(function mySucces(response) {
                    if(response.data.sucesso){
                        $scope.alertaErro(response.data.mensagem, true);
                    }else{
                        $scope.alertaErro(response.data.mensagem, false);
                    }
                }, function myError(response) {
                    alert("Ocorreu um erro ao tentar salvar.");
                });
            }    
                
                
            $http.get('api/ConceitoExtensao/buscarAtivos.php?idTipoConceito=1').then(function(response) {
                    if(response.data.sucesso) {
                        $scope.areasTematicas = response.data.conteudo;
                    } else {
                        $scope.alertaErro(response.data.mensagem, false);
                    }
               }, function(response) {
                   alert("Erro: " + response.statusText);
               })
               
               
               $http.get('api/ConceitoExtensao/buscarAtivos.php?idTipoConceito=2').then(function(response) {
                    if(response.data.sucesso) {
                        $scope.objetivosOnu = response.data.conteudo;
                    } else {
                        $scope.alertaErro(response.data.mensagem, false);
                    }
               }, function(response) {
                   alert("Erro: " + response.statusText);
               })
               
               
                $http.get('api/ConceitoExtensao/buscarAtivos.php?idTipoConceito=3').then(function(response) {
                    if(response.data.sucesso) {
                        $scope.desafiosBh2030 = response.data.conteudo;
                    } else {
                        $scope.alertaErro(response.data.mensagem, false);
                    }
               }, function(response) {
                   alert("Erro: " + response.statusText);
               })
               
               $http.get('api/Situacao/buscarTodas.php').then(function(response) {
                if(response.data.sucesso) {
                    $scope.situacoes = response.data.conteudo;
                } else {
                    $scope.alertaErro(response.data.mensagem, false);
                }
               }, function(response) {
                   alert("Erro: " + response.statusText);
               })
               
            $http.get('api/TipoAcao/buscarTodos.php').then(function(response) {
                if(response.data.sucesso) {
                    $scope.tiposAcaos = response.data.conteudo;
                } else {
                    $scope.alertaErro(response.data.mensagem, false);
                }
           }, function(response) {
               alert("Erro: " + response.statusText);
           })
           
           $http.get('api/Curso/buscarAtivos.php').then(function(response) {
                if(response.data.sucesso) {
                    $scope.cursos = response.data.conteudo;
                } else {
                    $scope.alertaErro(response.data.mensagem, false);
                }
           }, function(response) {
               alert("Erro: " + response.statusText);
           })
        }
        
    );
    
    app.directive('select', function () {
    return {
          restrict: 'C',
          require: 'ngModel',
          link: function (scope, element, attrs, ngModel) {
            var $el = $(element);
            $el.selectpicker({
              style: 'btn-default',
              size: false
            });
            $el.on('change', function (ee, aa) {
              ngModel.$setViewValue($el.val());
              scope.$apply();
            });
          }
        };
      });
  /*http://stackoverflow.com/questions/25971400/bootstrap-select-angularjs-dropdown-not-working*/
  
    $(window).bind("load", function () {
        return $('select').selectpicker();
    });
    
   
    