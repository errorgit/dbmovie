(function (angular) {
    angular.module('movie.detail', ['ngRoute', 'uglyJsonp'])
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider
                .when('/subject/:id', {
                    controller: 'detailController',
                    templateUrl: './js/detail/view.html'
                });

    }])
        .controller('detailController', ['$scope', '$http', '$routeParams', '$route', 'uJsonp', function ($scope, $http, $routeParams, $route, uJsonp) {
            //if show loading image
            $scope.loading = true;
            $scope.currentPage = parseInt($routeParams.page);
            uJsonp.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id, {
                callback: function (data) {
                    $scope.data = data;
                    $scope.loading = false;
                    $scope.$apply();
                }
            });

    }]);
})(angular);
