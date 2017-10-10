'use strict';

// Declare app level module which depends on views, and components
(function (angular) {
    angular.module('movie', [
    'ngRoute',
    'moive.directive.getFocus',
    'movie.directive.search',
    'movie.detail',
    'movie.list',
    

    ])
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider.otherwise({
                redirectTo: '/coming_soon/1'
            })

    }]);

})(angular);
