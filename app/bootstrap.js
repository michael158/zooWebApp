var app = angular.module('app', ['app.controllers','app.services','app.directives', 'lumx', 'ngRoute','angular-loading-bar']);

// Inicialização dos modulos
angular.module('app.controllers', []);
angular.module('app.services', ['ngResource']);
angular.module('app.directives', []);

app.provider('appConfig', function () {
    var config = {
        baseUrl: 'http://teste.app/'
    };
    return {
        config: config,
        $get: function () {
            return config;
        }
    }

});


// ROUTES //------------------------------------------------------------------------------------------------------------
app.config([
    '$routeProvider','cfpLoadingBarProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl : 'app/views/seals/index.html',
                controller     : 'listSealsController',
            })
            .when('/seals', {
                templateUrl : 'app/views/seals/index.html',
                controller     : 'listSealsController',
            })
            .when('/seals/add', {
                templateUrl : 'app/views/seals/add.html',
                controller     : 'addSealsController',
            })
            .when('/seals/edit/:id', {
                templateUrl : 'app/views/seals/edit.html',
                controller     : 'editSealsController',
                resolve: {
                    seal: function (sealService, $route) {
                        return sealService.get({id: $route.current.params.id}).$promise;
                    },
                },
            })
            .when('/seals/view/:id', {
                templateUrl : 'app/views/seals/view.html',
                controller     : 'viewSealsController',
                resolve: {
                    seal: function (sealService, $route) {
                        return sealService.get({id: $route.current.params.id, with: 'babies'}).$promise;
                    },
                },
            })
            .when('/seals/delete/:id', {
                templateUrl : 'app/views/seals/delete.html',
                controller     : 'deleteSealsController',
                resolve: {
                    seal: function (sealService, $route) {
                        return sealService.get({id: $route.current.params.id}).$promise;
                    },
                },
            })

            .when('/baby-seals', {
                templateUrl : 'app/views/baby-seals/index.html',
                controller     : 'listBabiesController',
            })

            .when('/baby-seals/add', {
                templateUrl : 'app/views/baby-seals/add.html',
                controller     : 'addBabiesController',
                resolve: {
                    mothers : function (babySealService) {
                        return babySealService.mothers();
                    }
                }
            })
            .when('/baby-seals/edit/:id', {
                templateUrl : 'app/views/baby-seals/edit.html',
                controller     : 'editBabiesController',
                resolve: {
                    baby: function (babySealService, $route) {
                        return babySealService.get({id: $route.current.params.id}).$promise;
                    },
                },
            })
            .when('/baby-seals/delete/:id', {
                templateUrl : 'app/views/baby-seals/delete.html',
                controller     : 'deleteBabiesController',
                resolve: {
                    baby: function (babySealService, $route) {
                        return babySealService.get({id: $route.current.params.id,columns: '*', with: 'mother'}).$promise;
                    },
                },
            })

            .when('/baby-seals/view/:id', {
                templateUrl : 'app/views/baby-seals/view.html',
                controller     : 'viewBabiesController',
                resolve: {
                    baby: function (babySealService, $route) {
                        return babySealService.get({id: $route.current.params.id, columns: '*', with: 'mother'}).$promise;
                    },
                },
            })

    }]);

app.run(['$rootScope', '$window', '$location',
    function ($rootScope, $window, $location) {




    }]);


