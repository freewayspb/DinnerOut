(function () {
    'use strict';

    angular
        .module('DinnerOut')
        .factory('myService', GetSet);

    var numberOfPeople = 0;
    var personName = "";
    var personPrice = 0;
    var personDiscount = 0;
    var generalLiquid = 0;
    var obj = {};
    var MassOfPeople = [];
    var totalBill=0;
    var SelectID=0;

    function GetSet() {
        return {

            setNum: function (num) {
                return numberOfPeople = num;
            },
            getNum: function () {
                return numberOfPeople;
            },
            setSelectID: function (id) {
                return SelectID = id;
            },
            getSelectID: function () {
                return SelectID;
            },
            setDiscount: function (discount) {
                return personDiscount = discount;
            },
            getDiscount: function () {
                return personDiscount;
            },
            setLiquid: function (liquid) {
                return generalLiquid = liquid;
            },
            getLiquid: function () {
                return generalLiquid;
            },
            setMass: function (mass) {
                return MassOfPeople = mass;
            },
            getMass: function () {
                return MassOfPeople;
            }

        }


    }

})();

