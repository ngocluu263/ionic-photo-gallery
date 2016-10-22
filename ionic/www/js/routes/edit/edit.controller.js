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
     * @name EditSCtrl
     * @module app.edit
     * @requires $rootScope
     * @requires $state
     * @requires Authentication
     * @description
     * Controller for the edi page.
     *
     * @ngInject
     */

    function EditCtrl($location, $rootScope, $state, Authentication) {
        }
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

            vm.goHome = function() {
                $location.path('/');
            };

            vm.goToSignin = function(){
                $state.go('signin');
            };

    angular
        .module('app.edit')
        .controller('EditCtrl', EditCtrl);
})();
