angular.module('app.controllers')
    .controller('editBabiesController', ['$scope', 'babySealService','LxNotificationService','$location','baby',
        function ($scope, babySealService,LxNotificationService, $location,baby) {

        $scope.baby = baby;
            $scope.status = [{id: 0, name: 'Morto'},{id: 1, name: 'Vivo'}]

            $scope.baby.live = $scope.status[baby.live];

         $scope.baby.dateMask =  moment($scope.baby.date_birth).locale('en').format('LL');

        $scope.save = function () {
            $scope.baby.live = $scope.baby.live.id;
            babySealService.update({id: $scope.baby.id}, $scope.baby, function () {
                $location.path('baby-seals');
                LxNotificationService.success('Adicionado com sucesso!');
            }, function (data) {
                console.log(data);
                LxNotificationService.error('Falha ao atualizar!');
            });;
        }

    }]);
