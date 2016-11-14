angular.module('alurapic').controller('FotosController', function($scope, recursouFoto){

	$scope.fotos=[];
	$scope.filtro='';
	$scope.mensagem='';

	var recursouFoto = $resource('v1/fotos/:fotoId')

	recursouFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(error){
		console.log(error);
	});


/*
	promise.then(function(result){
		$scope.fotos = result.data;
	}).catch(function(error){
		console.log(error);
	});
*/
	$scope.remover = function (foto) {
		recursouFoto.delete({fotoId:foto._id}, function(){
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice( indexFoto, 1 );
			$scope.mensagem='Foto ' + foto.titulo + ' Removido com sucesso';
		},
		function(error){
			console.log(error);
			$scope.mensagem='Foto ' + foto.titulo + ' não foi removido';
		});


	}
});