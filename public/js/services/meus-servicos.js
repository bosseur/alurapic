angular.module('meusServicos', ['ngResource'])
	.factory('recursouFoto',function($resource){

	return $resource('v1/fotos/:fotoId', null, {
		update:{
			method:'PUT'
		}
	});
})
.factory('cadastroDeFotos', function(recursouFoto, $q){
	var servico ={};

	servico.cadastrar = function(foto){
		return $q(function(resolve, reject){
			if(foto._id){
				recursouFoto.update({fotoId:foto._id},
					foto,
					function(){
						resolve({
							mensagem:foto.titulo + ' alterado com sucesso',
							inclusao:false
						});
					}, 
					function(error){
						console.log(error)
						reject({
							mensagem:'Não foi possivel alterar a foto ' + foto.titulo
						});
					});
			}else{
				recursouFoto.save(foto, function(){
					resolve({
						mensagem:foto.titulo + ' incluido com sucesso',
						inclusao:true
					});
				},
				function(error){
						console.log(error);
						reject({
							mensagem:'Não foi possivel incluir a foto ' + foto.titulo
						});
				});
			}
		});
	}

	servico.list = function(fotoId){
		return $q(function(resolve, reject){
			recursouFoto.get({fotoId:fotoId}, 
			function(foto){
				resolve({
					foto:foto,
					mensagem:"Foto recuperado"
				});
				
			}, 
			function(error){
				console.log(error);
				reject({
					mensagem:"Não foi possivel obter a foto"
				})
				
			});
		})
	}

	return servico;
});
