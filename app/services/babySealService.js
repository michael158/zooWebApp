angular.module('app.services').service('babySealService',['$resource','appConfig', function($resource,appConfig){
    return $resource(appConfig.baseUrl + 'baby-seals/:id',{$id: '@id'},{
        query:{
            isArray: false
        },
        update:{
            method: 'PUT'
        },
        mothers:{
            method: 'GET',
            url: appConfig.baseUrl + '/mothers',
            isArray: false
        }
    });
}]);
