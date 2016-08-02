angular.module('app.controllers')
    .controller('listBabiesController', ['$scope', 'babySealService', function ($scope, babySealService) {
        $scope.babies = babySealService.query({columns: '*', with : 'mother'});

        $scope.status = ['Morto', 'Vivo'];

    }]);
