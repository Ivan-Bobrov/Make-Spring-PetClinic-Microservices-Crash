'use strict';

angular.module('vetFinder', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('vetFinder', {
                parent: 'app',
                url: '/vetFinder',
                template: '<vet-finder></vet-finder>'
            })
    }]);
