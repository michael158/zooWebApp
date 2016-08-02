angular.module('app.controllers')
    .controller('addBabiesController', ['$scope', 'babySealService','LxNotificationService','$location','mothers',
        function ($scope, babySealService,LxNotificationService, $location,mothers) {

        $scope.baby = new babySealService();
        $scope.mothers = mothers;
        $scope.status = [{id: 0, name: 'Morto'},{id: 1, name: 'Vivo'}]



            $scope.textToObjectMethod = function(data, callback)
            {
                callback({id: data.id, name: data.name });
            };

            $scope.objectMethodToText = function(data, callback)
            {
                callback(data);
            };


        $scope.save = function () {
            $scope.baby.seal_id = $scope.baby.seal_id.id;
            $scope.baby.live = $scope.baby.live.id;
            $scope.baby.$save().then(function () {
                LxNotificationService.success('Adicionado com sucesso!')
                $location.path('baby-seals');
            }, function (data) {
                console.log(data);
                LxNotificationService.success('Erro ao salvar!')

            });
        }

    }]);
