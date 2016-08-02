angular.module('app.controllers')
    .controller('editSealsController', ['$scope', 'sealService','LxNotificationService','$location','seal',
        function ($scope, sealService,LxNotificationService, $location,seal) {

        $scope.seal = seal;

         $scope.seal.dateMask =  moment($scope.seal.date_birth).locale('en').format('LL');

        $scope.save = function () {
            sealService.update({id: $scope.seal.id}, $scope.seal, function () {
                $location.path('seals');
                LxNotificationService.success('Adicionado com sucesso!');
            }, function (data) {
                console.log(data);
                LxNotificationService.error('Falha ao atualizar!');
            });;
        }

    }]);
