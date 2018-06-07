    function UsuarioService($http, $window, UtilService) {
        var sair = function() {
            $http({
                method: "POST",
                //data: user,
                url: 'api/Usuario/logout.php',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function mySucces(response) {
                if (response.data.sucesso) {
                    $window.location.href = '/login';
                }
                else {
                    UtilService.alertaErro(response.data.mensagem, false);
                }
            }, function myError(response) {
                alert("Ocorreu um erro ao tentar salvar. ");
            });
            //delete $sessionStorage.user;
            //$sessionStorage.$reset();
            //$window.location.href = 'login.html';
        };
        var getUser = function(callback) {
            var user = {
                id: 'undefined',
                nome: 'undefined',
                email: 'undefined',
                idc_tipo_usuario: 'undefined'
            };
            $http({
                method: "POST",
                //data: user,
                url: 'api/Usuario/validarSessao.php'
            }).then(function mySucces(response) {
                if (response.data.sucesso) {
                    user.id = response.data.conteudo.id;
                    user.nome = response.data.conteudo.nome;
                    user.email = response.data.conteudo.email;
                    user.idc_tipo_usuario = response.data.conteudo.idc_tipo_usuario;
                    callback(user);
                }
                else {

                    callback(user);
                }

            }, function myError(response) {
                console.log("Ocorreu um erro ao tentar logar. ");
            });
        };

        var logar = function(callback, user) {

            $http({
                method: "POST",
                data: user,
                url: 'api/Usuario/autenticar.php',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function mySucces(response) {
                if (response.data.sucesso) {
                    callback(response.data.conteudo);
                    $window.location.href = 'index.html';
                }
                else {
                    UtilService.alertaErro(response.data.mensagem, false);
                }
            }, function myError(response) {
                alert("Ocorreu um erro ao tentar salvar. ");
            });
        };

        return {
            sair: sair,
            logar: logar,
            getUser: getUser
        };
    }
