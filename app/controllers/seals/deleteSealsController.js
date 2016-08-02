angular.module('app.controllers')
    .controller('deleteSealsController', ['$scope', 'sealService','LxNotificationService','$location','seal',
        function ($scope, sealService,LxNotificationService, $location,seal) {

        $scope.seal = seal;

        $scope.save = function () {
            sealService.delete({id: $scope.seal.id}, $scope.seal, function () {
                $location.path('seals');
                LxNotificationService.success('Deletado com sucesso!');
            }, function (data) {
                console.log(data);
                LxNotificationService.error('Falha ao deletar!');
            });;
        }

    }]);
