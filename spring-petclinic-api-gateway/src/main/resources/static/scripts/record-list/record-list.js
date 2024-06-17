'use strict';

angular.module('recordList', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('records', {
                parent: 'app',
                url: '/records',
                template: '<record-list></record-list>'
            })
    }]);
