
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40835053-4', 'vince78718.github.io');
ga('send', 'pageview');

////// 

var root = 'http://localhost:8888/vince78718.github.io/';

angular.module('ngView', [], function($routeProvider, $locationProvider) {
  $routeProvider.when('/vince78718.github.io/', {
    templateUrl: 'home.html',
    controller: HomeController
  });
  $routeProvider.when('/vince78718.github.io/'+'about', {
    templateUrl: 'about.html',
    controller: AboutController
  });
 
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});

function MainController($scope, $route, $routeParams, $location) {

  $scope.root_url = root;

  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;

  console.log($routeParams);
}

function HomeController($scope, $http, $templateCache, $route, $routeParams, $location) {
  $scope.method = 'GET';
  $scope.url = 'json/home.json';

  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.doings = data;
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });

}

function AboutController($scope, $http, $templateCache, $route, $routeParams, $location) {
  // body...
}