angular.module('app.controllers')
    .controller('viewSealsController', ['$scope', 'sealService','LxNotificationService','$location','seal',
        function ($scope, sealService,LxNotificationService, $location,seal) {
        $scope.seal = seal;

        $scope.status = ['Morto', 'Vivo'];


    }]);
