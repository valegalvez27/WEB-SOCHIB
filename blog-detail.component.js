angular.module('sochib')
	.component('blogDetail', {
		template: '<div class="row">'+
              '<div class="span1">'+
              '</div>'+
              '<div class="span8">'+
                '<img src="img/blog/{{$ctrl.noticia.imagen}}" alt="">'+
                '<div class="post-d-info">'+
                  '<h3>{{$ctrl.noticia.titulo}}</h3>'+
                  '<div class="blue-dark">'+
                  '<i class="icon-user"></i> By {{$ctrl.noticia.autor}}'+
                  '</div>'+
                  '<p>{{$ctrl.noticia.cuerpo}}'+
                  '</p>'+
                '</div>'+
          '</div>'+
            '<div class="row space30"></div>'+
          '<div class="row space50"></div>'+  
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>',
  		controller: function BlogDetailController ($http,$location,$scope) {
		    var search = $location.search();
		    var self = this;
         $http.get('data/noticias/'+search.noticiaid+'.json').then( function(response) {
        self.noticia = response.data[0];
      });
	}
	});