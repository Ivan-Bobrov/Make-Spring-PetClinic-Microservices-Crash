'use strict';

angular.module('courseDetails', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('courseDetails', {
                parent: 'app',
                url: '/courses/details/:courseId',
                template: '<course-details></course-details>'
            })
    }]);
