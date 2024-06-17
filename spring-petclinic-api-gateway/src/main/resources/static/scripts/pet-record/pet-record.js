'use strict';

angular.module('petRecord', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('petRecord', {
                parent: 'app',
                url: '/records/:PetId',
                template: '<pet-record></pet-record>'
            })
    }]);
