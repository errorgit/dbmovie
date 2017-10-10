(function (angular) {
    angular.module('movie.list', ['ngRoute', 'uglyJsonp'])
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider
                .when('/:road/:page', {
                    controller: 'listController',
                    templateUrl: './js/list/view.html'
                })
            /* .when('/weekly', {
                 controller: 'listController2',
                 templateUrl: 'list/view.html'
             })*/

    }])
        .controller('listController', ['$scope', '$http', '$routeParams', '$route', 'uJsonp', function ($scope, $http, $routeParams, $route, uJsonp) {
            /*$http.get('data/' + $routeParams.road + '.json')
                .then(function (data) {
                    //                console.log(data);
                    $scope.data = data.data;
                    //                console.log($routeParams);
                });*/
            //            $scope.data={};
            $scope.loading = true;
            $scope.count = 5;
            $scope.currentPage = parseInt($routeParams.page);
            uJsonp.jsonp('https://api.douban.com/v2/movie/' + $routeParams.road, {                
                count: 5,
                start: ( $scope.currentPage- 1) * $scope.count,
                q:$routeParams.q,
                callback: function (data) {
                    $scope.data = data;
                    $scope.loading = false;
                    $scope.pageTotal = Math.ceil(data.total / data.count);
                    $scope.$apply();
                }
            });
            //换页
            $scope.toPage = function (page) {
                if (page >= 1 && page <= $scope.pageTotal) {
                    $route.updateParams({
                        page: page
                    });
                }
            }

    }]);
})(angular)
