angular.module('alurapic').controller('FotoController', ['$scope', '$routeParams', 'recursouFoto', 'cadastroDeFotos', function($scope, $routeParams,recursouFoto,cadastroDeFotos){

	$scope.foto={};
	$scope.mensagem='';

	if($routeParams.fotoId){
		cadastroDeFotos.list($routeParams.fotoId)
		.then(function(dados){
			$scope.mensagem = dados.mensagem;
			$scope.foto= dados.foto;	
		})
		.catch(function(error){
			$scope.mensagem = dados.mensagem;
		});

	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){

			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao)$scope.foto={};
				//$scope.focus=true;

			})
			.catch(function(error){
				$scope.mensagem = dados.mensagem;
			})
		}
	};
}]);