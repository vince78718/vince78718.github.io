
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40835053-4', 'vince78718.github.io');
ga('send', 'pageview');

////// 

var root = 'http://vince78718.github.io';
var folder = '/';

angular.module('ngView', [], function($routeProvider, $locationProvider) {
  $routeProvider.when(folder, {
    templateUrl: 'home.html',
    controller: HomeController
  });
  $routeProvider.when(folder+'about', {
    templateUrl: 'about.html',
    controller: AboutController
  });
 
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});

function MainController($scope, $route, $routeParams, $location) {

  $scope.root_url = root+folder;

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