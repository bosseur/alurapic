angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
	var ddo ={};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@', // nomes iguais pode usar somente @
		styleClass: '@'
	};
	ddo.transclude=true;

	ddo.templateUrl='js/directives/meu-painel.html';


	return ddo;
});


