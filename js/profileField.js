angular
    .module('DinnerOut')
    .controller('profileFieldCtrl', ['$scope', '$location', 'myService',
        function ($scope, $location, myService) {

            $scope.People = myService.getNum();
            function Profiles(id, name, price, totalBill) {
                var vm = this;
                vm.id = id;
                vm.name = name;
                vm.price = price;
                vm.totalBill = totalBill;
            }

            $scope.peoplesMassive = [];
            for (var i = 0; i < $scope.People; i++) {
                var id = i;
                $scope.peoplesMassive[i] = new Profiles(id, "", "", 0);
            }
            console.log($scope.peoplesMassive);
            $scope.select = "0";
            $scope.getChange = function (sel) {
                var value = sel.select;
                return value;
            };

            $scope.click1 = function () {
                myService.setMass($scope.peoplesMassive);
                myService.setDiscount($scope.discount);
                myService.setLiquid($scope.drink);
                myService.setSelectID($scope.getChange(this));
                $location.url('/resultField');
            }
        }]);
