angular.
	module('sochib').
		component('blogSlot', {
			template:'<div class="row" ng-repeat="noti in $ctrl.noticias">'+
                '<div class="span1">'+
                '</div>'+
                '<div class="span8">'+
                  '<a href="blog-detail.htm"><img src="img/blog/{{noti.imagen}}" alt=""></a>'+
                  '<div class="row">'+
                    '<div class="span8 post-d-info">'+
                      '<a href="blog-detail.htm"><h3>{{noti.titulo}}</h3></a>'+
                      '<div class="blue-dark">'+
                      '<i class="icon-user"></i> By {{noti.autor}}'+
                      '</div>'+
                      '<p>'+
                      '{{noti.summary}}.'+
                      '</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>',
            controller: function BlogSlotController($http,$location,$q) {

            	function getNoticia(id) {
            		return $http.get('/data/noticias/'+id+'.json');
            	}

            	var notis = [];
        		var pag = $location.search().page;
        		var n = 1;
        		$http.get('/data/noticias.json').then(function(response) {
        			var max = response.data.ultima;
        			n = max - ( (pag - 1) * 3);
        		});

				console.log(n);

            	for(i=0;i<3;i++) {
            		var id = n-i;
            		if(id<1)
            			break;
            		notis.push(getNoticia(id));
            	}

            	self.noticias = [];

            	$q.all(notis).then(function(response) {
            		for(i=0;i<response.length;i++) {
			          var k = n-i;
			          var dataF = $.extend(response[i].data[0],{'id':k});
			          console.log(dataF);
			          self.noticias.push(dataF);
			        }
        
            	});
           	 	
            }
		});