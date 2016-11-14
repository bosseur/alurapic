angular.module('meusServicos', ['ngResource'])
	.factory('recursouFoto',function($resource){

	return $resource('v1/fotos/:fotoId', null, {
		update:{
			method:'PUT'
		}
	});
});
