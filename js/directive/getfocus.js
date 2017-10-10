(function (angular) {
    angular.module('moive.directive.getFocus', [])
        .directive('getFocus', ['$location', function ($location) {
            return {
                link: function ($scope, ele, attr) {
                    $scope.location = $location;
                    /*scope.$watch('location.path()',function   ( ) {
                        if((ele.children('a')[0].href.indexOf($location.path().match(/\w(?=\/)/i)[0]))==-1){
                            ele.removeClass('active');
                        }else{
                            ele.addClass('active');
                        }
                    });*/
                    $scope.$watch('location.path()', function (n) {
                        if (ele.children('a')[0].href.match(n.match(/\w+(?=\/)/i)) != null) {
                            ele.addClass('active');
                        } else {
                            ele.removeClass('active');
                        }

                    })
                    /*console.log($location.path());
                    console.log(scope.location.path());*/

                }
            }

    }]);
})(angular);
