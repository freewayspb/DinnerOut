angular
    .module('route', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/resultField', {
                templateUrl: 'resultField.html',
                controller: 'resultFieldCtrl'
            })
            .when('/profileField', {
                templateUrl: 'profileField.html',
                controller: 'profileFieldCtrl'
            })
            .otherwise({
                templateUrl: 'typeNumField.html',
                controller: 'DinnerOutCtrl'

            });

    });
