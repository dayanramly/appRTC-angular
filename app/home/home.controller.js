/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
 ;(function() {

  angular.module('apprtc.home')
  .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$window', '$location'];


  function MainController(LocalStorage, QueryService, $window, $location) {

    // 'controller as' syntax
    var vm = this;

    vm.chatUser = [
    { "name": "Dayan Ramly", "status": true}, 
    { "name": " Romi Halimman", "status": true}, 
    { "name": "Galih Dwi Jatmiko", "status": false}, 
    { "name": "Adi Setiawan", "status": false}, 
    { "name": "Yanuar Arifin", "status": true}, 
    ];

    vm.OpenPopupWindow = function (name) {
      var popup = $window.open($location.host() + "/popup.html", 'PopUp'+name , "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=380,height=480");
      popup.Name = name;
    }

  }


})();