var logApp = angular.module('myApp', ["ngRoute"]);

function view(fileWithPath) {
    return './views/' + fileWithPath + '.html'
}

logApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            templateUrl: view('home'),
            controller: 'usersController',
            controllerAs: 'UC'
        })
        .when("/blog", {
            template : "<h3>This is blog</h3>"
        })
});