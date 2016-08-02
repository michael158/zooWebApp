angular.module('app.controllers')
    .controller('deleteBabiesController', ['$scope', 'babySealService', 'LxNotificationService', '$location', 'baby',
        function ($scope, babySealService, LxNotificationService, $location, baby) {
            
            var status = ['Morto', 'Vivo'];

            $scope.baby = baby;
            $scope.baby.live = status[$scope.baby.live];

            $scope.save = function () {
                babySealService.delete({id: $scope.baby.id}, $scope.baby, function () {
                    $location.path('baby-seals');
                    LxNotificationService.success('Deletado com sucesso!');
                }, function (data) {
                    console.log(data);
                    LxNotificationService.error('Falha ao deletar!');
                });
                ;
            }

        }]);
