;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('apprtc', [
      'ui.router',
      'ui.bootstrap',

      'apprtc.auth',
      'apprtc.home'
    ]);

})();