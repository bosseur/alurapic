angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos=[];
	$scope.filtro='';
	$scope.mensagem='';

	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(error){
		console.log(error);
	})

/*
	promise.then(function(result){
		$scope.fotos = result.data;
	}).catch(function(error){
		console.log(error);
	});
*/
	$scope.remover = function (foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice( indexFoto, 1 );
			$scope.mensagem='Foto ' + foto.titulo + ' Removido com sucesso';
		})
		.error(function(error){
			console.log(error);
			$scope.mensagem='Foto ' + foto.titulo + ' não foi removido';
		});

	}
});