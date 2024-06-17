'use strict';

angular.module('recordList')
    .controller('RecordListController', ['$http', function ($http) {
        var self = this;

        $http.get('api/customer/pets').then(function (resp) {
            self.petList = resp.data;
        });
    }]);
