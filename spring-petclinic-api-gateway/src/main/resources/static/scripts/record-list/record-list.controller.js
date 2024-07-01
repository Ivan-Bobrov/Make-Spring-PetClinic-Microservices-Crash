'use strict';

angular.module('recordList')
    .controller('RecordListController', ['$http', '$state', function ($http, $state) {
        var self = this;

        $http.get('api/customer/pets').then(function (resp) {
            self.petList = resp.data;
        });

        $http.get('api/vet/vets').then(function (resp) {
            self.vetList = resp.data;
        });

        self.LockRecord = function (petId, vetId) {
            if (!vetId) {
                alert('Please select a vet before accessing the pet record.');
                return;
            }

            $state.go('petRecord', { petId: petId, vetId: vetId });
        };
    }]);
