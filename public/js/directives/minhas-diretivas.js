angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function(){
	var ddo ={};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@' // nomes iguais pode usar somente @
	};
	ddo.transclude=true;

	ddo.templateUrl='js/directives/meu-painel.html';


	return ddo;
})
.directive('minhaFoto', function(){
	var ddo ={};

	ddo.restrict = "AE";

	ddo.scope = {
		url: '@',
		titulo: '@'
	};
	ddo.transclude=false;

	ddo.templateUrl='js/directives/minha-foto.html';


	return ddo;
})
.directive('meuBotaoPerigo', function(){
	var ddo = {};
	ddo.restrict = 'E';

	ddo.scope={
		acao:'&',
		nome:'@'
	}

	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>'

	return ddo;
})
.directive('meuFocus', function(){
	var ddo = {};
	ddo.restrict = 'A';

	ddo.link=function(scope, element){
		scope.$on('fotoCadastrada', function(){
			element[0].focus();
		})
		/*scope.$watch('focus', function(){
			if(scope.focus){
				element[0].focus();
				scope.focus = false;
			}
		});*/
	}

	return ddo;
})
.directive('meusTitulos', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    ddo.controller = function($scope, recursouFoto) {
        recursouFoto.query(function(fotos) {
            $scope.titulos = fotos.map(function(foto) {
                return foto.titulo;
            });    
        });
    };
    return ddo;
});


