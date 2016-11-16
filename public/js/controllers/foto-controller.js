angular.module('alurapic').controller('FotoController', function($scope, $routeParams,recursouFoto,cadastroDeFotos){

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
			})
			.catch(function(error){
				$scope.mensagem = dados.mensagem;
			})
		}
	};
});