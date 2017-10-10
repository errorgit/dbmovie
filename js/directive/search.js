(function (angular) {
    angular.module('movie.directive.search', [])
        .directive('search', ['$route',function ($route) {
            return {
                replace: true,
                template: `<form class="navbar-form navbar-right" ng-submit = "search()">
            <input type="text" class="form-control" placeholder="Search..." ng-model = "searchData">
          </form>`,
                link: function ($scope, elem, attr) {
                    $scope.searchData = '';
                    $scope.search = function () {
//                        console.log('search');
                        $route.updateParams({road:'search',q:$scope.searchData})
                    }
                }
            }
    }])
})(angular)
