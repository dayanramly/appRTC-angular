;(function() {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
	 angular
	 .module('apprtc')
	 .constant('CONSTANTS', {
	 	'API_URL': 'http://www.yourAPIurl.com/'
	 });



	/**
	 * You can intercept any request or response inside authInterceptor
	 * or handle what should happend on 40x, 50x errors
	 * 
	 */
	 angular
	 .module('apprtc')
	 .factory('authInterceptor', authInterceptor);

	 authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

	 function authInterceptor($rootScope, $q, LocalStorage, $location) {

	    return {

	       // intercept every request
	       request: function(config) {
	       	config.headers = config.headers || {};
	       	return config;
	       },

	       // Catch 404 errors
	       responseError: function(response) {
	       	if (response.status === 404) {
	       		$location.path('/');
	       		return $q.reject(response);
	       	} else {
	       		return $q.reject(response);
	       	}
	       }
		};
	}


	/**
	 * Run block
	 */
	 angular
	 .module('apprtc')
	 .run(run);

	 run.$inject = ['$rootScope', '$location'];

	 function run($rootScope, $location) {

	  // put here everything that you need to run on page load

	 }

})();