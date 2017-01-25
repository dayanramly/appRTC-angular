;(function () {
    'use strict';

    // getter
    angular.module('apprtc.auth')
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

        $urlRouterProvider.otherwise('/login');

        $stateProvider
        .state('auth', {
            url: '/login',
            templateUrl: 'views/auth/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        });

        $httpProvider.interceptors.push('authInterceptor');
    }

})();
