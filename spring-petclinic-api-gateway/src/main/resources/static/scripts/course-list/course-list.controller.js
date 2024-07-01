'use strict';

angular.module('courseList')
    .controller('CourseListController', ['$http', function ($http) {
        var self = this;

        $http.get('api/customer/courses').then(function (resp) {
            self.courses = resp.data;
        });
    }]);
