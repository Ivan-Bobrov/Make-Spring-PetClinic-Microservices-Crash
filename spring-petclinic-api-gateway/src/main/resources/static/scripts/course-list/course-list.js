'use strict';

angular.module('courseList', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('courses', {
                parent: 'app',
                url: '/courses',
                template: '<course-list></course-list>'
            })
    }]);
