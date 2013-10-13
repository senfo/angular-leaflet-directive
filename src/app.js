var app = angular.module("MainPage", ['ngRoute', 'leaflet-directive', 'hljs']);
app.value('$anchorScroll', angular.noop);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/main.html'
    }).when('/getting-started', {
        templateUrl: 'partials/main.html'
    }).when('/howto-extend', {
        templateUrl: 'partials/howto-extend.html'
    }).when('/examples/:example', {
        templateUrl: 'partials/examples.html'
    });
    $locationProvider.hashPrefix('!');
}]);