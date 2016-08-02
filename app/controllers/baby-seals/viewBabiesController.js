angular.module('app.controllers')
    .controller('viewBabiesController', ['$scope', 'sealService','LxNotificationService','$location','baby',
        function ($scope, sealService,LxNotificationService, $location,baby) {
        $scope.baby = baby;

        $scope.status = ['Morto', 'Vivo'];


    }]);
