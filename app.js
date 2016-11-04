var nameApp = angular.module('starter', ['ionic']);

nameApp.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'list.html',
      controller: 'ListCtrl'
    })
    .state('view', {
      url: '/movie/:movieid',
      templateUrl: 'view.html',
      controller: 'ViewCtrl'
    })
  .state('allMovies', {
      url: '/allMovies/:movieid',
      templateUrl: 'allMovies.html',
      controller: 'AllMoviesCtrl'
    });
 
  $urlRouterProvider.otherwise("/");
 
});

nameApp.factory('Movies', function($http) {
  var cachedData;
 
  function getData(moviename, callback) {
 
    var url = 'http://api.themoviedb.org/3/',
      mode = 'search/movie?query=',
      name = '&query=' + encodeURI(moviename),
      key = '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
 
      //var fullUrl = 'http://localhost:3000/' + encodeURI(moviename);
 
    //$.get(fullUrl).success(function(data) {
    $http.get(url + mode + key + name).success(function(data) {
 
      cachedData = data.results;
      callback(data.results);
    });
  }
 
  return {
    list: getData,
    find: function(name, callback) {
      console.log(name);
      var movie = cachedData.filter(function(entry) {
        return entry.id == name;
      })[0];
      callback(movie);
    }
  };
 
});
 
nameApp.controller('ListCtrl', function($scope, $http, Movies) {
 
  $scope.movie = {
    name: 'Batman'
  }
 
  $scope.searchMovieDB = function() {
 
    Movies.list($scope.movie.name, function(movies) {
      $scope.movies = movies;
    });
     
  };
  
  $scope.searchMovieDB();
  
});
 
nameApp.controller('ViewCtrl', function($scope, $http, $stateParams, Movies) {
  Movies.find($stateParams.movieid, function(movie) {
    $scope.movie = movie;
  });
});

nameApp.directive('holdList', ['$ionicGesture', function ($ionicGesture) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $ionicGesture.on('hold', function (e) {

                var content = element[0].querySelector('.item-content');

                var buttons = element[0].querySelector('.item-options');
                var buttonsWidth = buttons.offsetWidth;

                ionic.requestAnimationFrame(function() {
					content.style[ionic.CSS.TRANSITION] = 'all ease-out .25s';

					if (!buttons.classList.contains('invisible')) {
						content.style[ionic.CSS.TRANSFORM] = '';
						setTimeout(function() {
							buttons.classList.add('invisible');
						}, 250);				
					} else {
						buttons.classList.remove('invisible');
						content.style[ionic.CSS.TRANSFORM] = 'translate3d(-' + buttonsWidth + 'px, 0, 0)';
					}
				});


            }, element);
        }
    };
} ]);