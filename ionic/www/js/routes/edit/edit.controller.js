/**
 * User controller.
 *
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name UserCtrl
     * @module app.edit
     * @requires $rootScope
     * @requires user
     * @description
     * Controller for the user page.
     *
     * @ngInject
     */
    function EditCtrl($rootScope, user) {
        var vm = this;
        vm.user = {};
        vm.edit = function(user, isValid) {
            if(!isValid) {return;}
            Authentication.edit(user).then(function () {
                // save user profile details to $rootScope
                $rootScope.me = Authentication.getCurrentUser();

                $state.go('app.users', { userId: $rootScope.me._id});
            }, function(err) {
                console.error('error' + err);
            });
        };
    }

    angular
        .module('app.edit')
        .controller('EditCtrl', EditCtrl);
})();
