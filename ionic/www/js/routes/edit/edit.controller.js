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
    }

    angular
        .module('app.edit')
        .controller('EditCtrl', EditCtrl);
})();
