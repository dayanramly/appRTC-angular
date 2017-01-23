/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
 ;(function() {

  angular
  .module('apprtc')
  .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var vm = this;


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();