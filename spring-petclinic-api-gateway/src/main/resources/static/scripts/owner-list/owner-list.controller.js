'use strict';

angular.module('ownerList')
    .controller('OwnerListController', ['$http', function ($http) {
        var self = this;

        self.currentPage = 0;
        self.pageSize = 50;

        self.loadOwners = function() {
            $http.get(`api/customer/owners?page=${self.currentPage}&size=${self.pageSize}`).then(function (resp) {
                self.owners = resp.data.content;
                self.totalPages = resp.data.totalPages;
            });
        };

        self.nextPage = function() {
            if (self.currentPage < self.totalPages - 1) {
                self.currentPage++;
                self.loadOwners();
            }
        };

        self.prevPage = function() {
            if (self.currentPage > 0) {
                self.currentPage--;
                self.loadOwners();
            }
        };

        self.loadOwners(); // initial load
    }]);
