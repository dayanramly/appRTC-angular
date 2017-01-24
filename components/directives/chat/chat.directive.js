(function () {
    'use strict';

    // getter
    angular.module('apprtc')
    .directive('chatContainer', chatContainer);

    /**
     * Component definition.
     * @return {object}
     */
    function chatContainer() {

        var link = function (scope, el) {
            
        };

        return {
            restrict: 'E',
            scope: {},
            controller: 'chatContainerController',
            controllerAs: 'chat',
            // bindToController: {
            //     model: '=image'
            // },
            templateUrl: 'component/directives/chat/chat.html',
            link: link
        };
    }
})();
