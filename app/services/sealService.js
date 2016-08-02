angular.module('app.services').service('sealService',['$resource','appConfig', function($resource,appConfig){
    return $resource(appConfig.baseUrl + 'seals/:id',{$id: '@id'},{
        query:{
            isArray: false
        },
        update:{
            method: 'PUT'
        },
        productive:{
            method: 'GET',
            url: appConfig.baseUrl + '/most-productive',
            isArray: false
        }
    });
}]);
