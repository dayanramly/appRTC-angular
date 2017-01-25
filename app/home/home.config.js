;(function () {
    'use strict';

    // getter
    angular.module('apprtc.home')
    .config(config);

    // safe dependency injection
    // this prevents minification issues
    config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$compileProvider'];

    /**
     * Module config.
     * @deps   {instance} $stateProvider
     * @return {void}
     */
     function config($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $compileProvider) {

        $locationProvider.html5Mode(false);

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController',
            controllerAs: 'main'
        });

        $httpProvider.interceptors.push('authInterceptor');
    }

})();
