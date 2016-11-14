angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursouFoto){

	$scope.foto={};
	$scope.mensagem='';

	if($routeParams.fotoId){
		recursouFoto.get({fotoId:$routeParams.fotoId}, function(foto){
			$scope.foto = foto;
		}, 
		function(error){
			console.log(error);
			$scope.mensagem = "Não foi possivel obter a foto";
		});
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){

			if($scope.foto._id){

				recursouFoto.update({fotoId:$scope.foto._id},
				$scope.foto,
				function(){
					$scope.mensagem="Alterado com sucesso";
				}, 
				function(error){
					console.log(error);
					$scope.mensagem="Erro ao alterar";
				})

			}else{

				recursouFoto.save($scope.foto,
				function(){
					$scope.foto = {};
					$scope.mensagem="Cadastrado com sucesso";
				}, 
				function(error){
					console.log(error);
					$scope.mensagem="Erro ao cadastrar";
				})

			}
		}
	};
});