'use strict';

angular.module('vetList')
    .controller('VetListController', ['$http', function ($http) {
        var self = this;

        self.currentPage = 0;
        self.pageSize = 50;

        self.loadVets = function() {
            $http.get(`api/vet/vets?page=${self.currentPage}&size=${self.pageSize}`).then(function (resp) {
                self.vetList = resp.data.content;
                self.totalPages = resp.data.totalPages;
            });
        };

        self.nextPage = function() {
            if (self.currentPage < self.totalPages - 1) {
                self.currentPage++;
                self.loadVets();
            }
        };

        self.prevPage = function() {
            if (self.currentPage > 0) {
                self.currentPage--;
                self.loadVets();
            }
        };

        self.loadVets(); // initial load
    }]);
