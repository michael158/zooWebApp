angular.module('app.controllers')
    .controller('listSealsController', ['$scope', 'sealService', function ($scope, sealService) {
        $scope.seals = sealService.query();
        $scope.mostProductive = sealService.productive();
    }]);
