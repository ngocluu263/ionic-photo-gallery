/**
 * User route.
 *
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name editRoute
     * @module app.edit
     * @requires $stateProvider
     * @description
     * Router for the user page.
     *
     * @ngInject
     */
    function editRoute($stateProvider) {
        $stateProvider.state('app.edit',
            {
                url: '/users/:userId',
                views: {
                    'menuContent': {
                        templateUrl: 'js/routes/edit/edit.html',
                        controller: 'EditCtrl as vm'
                    }
                },
                resolve: {/* @ngInject */
                    user: function(UserService, $stateParams){
                        var userId = $stateParams.userId;
                        return UserService.get(userId);
                    }
                },
                data: {
                    authenticate: true
                }
            });
    }

    angular
        .module('app.edit')
        .config(editRoute);

})();
