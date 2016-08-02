angular.module('app.controllers')
    .controller('addSealsController', ['$scope', 'sealService','LxNotificationService','$location',
        function ($scope, sealService,LxNotificationService, $location) {

        $scope.seal = new sealService();

        $scope.save = function () {
            $scope.seal.$save().then(function () {
                LxNotificationService.success('Adicionado com sucesso!')
                $location.path('seals');
            }, function (data) {
                console.log(data);
                LxNotificationService.success('Erro ao salvar!')

            });
        }

    }]);
