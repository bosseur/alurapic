angular.module('minhasDiretivas', [])
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
});


