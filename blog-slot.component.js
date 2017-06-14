angular.
	module('sochib').
		component('blogSlot', {
			template:'<div class="row" ng-repeat="noti in $ctrl.news">'+
                '<div class="span1">'+           
                '</div>'+
                '<div class="span8">'+
                  '<a href="blog-detail.html#!?noticiaid={{noti.id}}"><img src="img/blog/{{noti.imagen}}" alt=""></a>'+   
                  '<div class="row">'+
                    '<div class="span8 post-d-info">'+
                      '<a href="blog-detail.html"><h3>{{noti.titulo}}</h3></a>'+
                      '<div class="blue-dark">'+
                      '<i class="icon-user"></i> By {{noti.autor}}'+
                      '</div>'+
                      '<p>'+
                      '{{noti.summary}}'+
                      '</p>'+
                    '</div>'+ 
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="row space40"></div>',
            controller: function BlogSlotController($http,$location,$q) {

            	function getNoticia(id) {
            		return $http.get('/data/noticias/'+id+'.json');
            	}

            	var self = this;
      self.news = [];
      self.newsPr = [];
      var page = $location.search().page;
      var newsPromise = $http.get('/data/noticias.json');
      newsPromise.then(function(response) {
        var max = response.data.ultima;
        console.log("ultima noticia: "+max);
        var firstN = (max - ( (page - 1) * 3 ) );
        return max;
      }).then(function(n) {
        var j = n;
        for(i=0;i<=2;i++){
        self.newsPr.push(getNoticia(j));
        j--;
        
        if(j<1)
          break;


        }

        $q.all(self.newsPr).then(function(response){
        for(i=0;i<response.length;i++) {
          var k = n-i;
          var dataF = $.extend(response[i].data[0],{'id':k});
          self.news.push(dataF);
        }
        
        });



      });
           	 	
            }
		});