angular.
	module('sochib').
		component('blogSlot', {
			template:'<div class="row">'+
                '<div class="span1">'+
                '</div>'+
                '<div class="span8">'+
                  '<a href="blog-detail.htm"><img src="img/blog/1.jpg" alt=""></a>'+
                  '<div class="row">'+
                    '<div class="span8 post-d-info">'+
                      '<a href="blog-detail.htm"><h3>Ancient Timbuktu Texts in Danger?</h3></a>'+
                      '<div class="blue-dark">'+
                      '<i class="icon-user"></i> By Admin'+
                      '</div>'+
                      '<p>'+
                      'Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Pie wafer wypas candy canes toffee. Cookie icing candy jelly oat cake chupa chups bear claw.'+
                      '</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>',
            controller: function BlogSlotController($http,$location,$q) {
            	function getCantidad() {
            		var pag = $location.search().page;
            		$http.get('/data/noticias.json').then(function(response) {
            			return ( response.data.ultima - (page * 3) );
            		});
            	}

            	function getNoticia(id) {
            		$http.get('/data/noticias/'+id+'.json').then(function(response){
            			return response.data;
            		});
            	}

            	
            }
		});