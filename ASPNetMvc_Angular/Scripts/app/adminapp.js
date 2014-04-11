// Main configuration file. Sets up AngularJS module and routes and any other config objects

var adminRoot = angular.module('admin', ['ngRoute', 'ngGrid', 'ngResource', 'angularStart.services', 'angularStart.directives']);     //Define the main module

adminRoot
    .config(['$routeProvider', function ($routeProvider) {
        //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
        $routeProvider
            .when('/admin', { templateUrl: '/admin/main', controller: 'AdminMainController' })
            .when('/test2', { templateUrl: '/admin/test2', controller: 'AdminMainController' })
            .when('/test1', { templateUrl: '/admin/test2', controller: 'AdminMainController' })
            .when('/dashboard', { templateUrl: '/admin/dashboard', controller: 'AdminMainController' })
            //.when('/angular', { templateUrl: '/home/angular' })
            //.when('/account', { templateUrl: '/account/test', controller: 'AccountController' })
            .otherwise({ redirectTo: '/admin' });
    }])
    .controller('AdminRootController', ['$scope', '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.activeViewPath = $location.path();
        });
    }]);
