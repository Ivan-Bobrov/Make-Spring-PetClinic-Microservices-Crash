'use strict';

angular.module('courseDetails')
    .controller('CourseDetailsController', ['$http', '$stateParams', function ($http, $stateParams) {
        var self = this;

        $http.get('api/gateway/courses/' + $stateParams.courseId).then(function (resp) {
            self.owner = resp.data;
        });
    }]);
