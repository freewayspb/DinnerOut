angular
    .module('DinnerOut', ['route'])
    .controller('DinnerOutCtrl', ['$scope', '$location', 'myService',
    function ($scope, $location, myService) {
        
        $scope.click = function () {
            console.log($scope.num);
            myService.setNum($scope.num);

            $location.url('/profileField');
        }
    }
]);


