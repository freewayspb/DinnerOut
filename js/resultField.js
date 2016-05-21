angular
    .module('DinnerOut')
    .controller('resultFieldCtrl', ['$scope', 'myService',
        function ($scope, myService) {
            $scope.Num = myService.getNum();

            $scope.mass = myService.getMass();
            console.log($scope.mass);
            $scope.disc = myService.getDiscount();
            var disc = $scope.disc / 100;
            $scope.liq = myService.getLiquid();
            var sum = 0;
            $scope.selectId = "0";
            if (myService.getSelectID()!=="0") {
                $scope.selectId = "1";
            }
            console.log($scope.selectId);

            if ($scope.selectId==="0") {
                for (var i = 0; i < $scope.mass.length; i++) {
                    $scope.mass[i].totalBill = $scope.mass[i].price - ($scope.mass[i].price * disc) + ($scope.liq / $scope.Num);
                    sum  += $scope.mass[i].totalBill;
                }
                $scope.theTotalest = sum.toFixed(2);
            } else {
                for (var i = 0; i < $scope.mass.length; i++) {
                    $scope.mass[i].totalBill = $scope.mass[i].price - ($scope.disc/$scope.Num) + ($scope.liq / $scope.Num);
                    sum  += $scope.mass[i].totalBill;
                }
                $scope.theTotalest = sum.toFixed(2);
            }


        }]);