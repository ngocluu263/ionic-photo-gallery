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
     * @name EditCtrl
     * @module app.edit
     * @requires $rootScope
     * @requires $state
     * @requires Authentication
     * @description
     * Controller for the edi page.
     *
     * @ngInject
     */

    function EditCtrl($state, Authentication) {
        var vm = this;
        $state.go('edit');

    }

    angular
        .module('app.edit')
        .controller('EditCtrl', EditCtrl);
})();
