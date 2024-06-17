'use strict';

angular.module('petRecord', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('recordList', {
            url: '/records',
            templateUrl: 'scripts/record-list/record-list.template.html',
            controller: 'RecordListController as $ctrl'
        })
            .state('petRecord', {
                parent: 'app',
                url: '/records/pet/:petId/:vetId',
                template: '<pet-record></pet-record>'
            })
    }]);
