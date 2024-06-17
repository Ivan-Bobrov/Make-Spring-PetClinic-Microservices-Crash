'use strict';

angular.module('recordList')
    .controller('RecordListController', ['$http', function ($http, $stateParams, $state) {
        var self = this;

        $http.get('api/customer/pets').then(function (resp) {
            self.petList = resp.data;
        });

        $http.get('api/vet/vets').then(function (resp) {
            self.vetList = resp.data;
        });

        var req;
        self.LockRecord =  function (petId, vetId) {
            console.log("Pet ID: " + petId);
            console.log("Vet ID: " + vetId);

            //TODO IMPLEMENT LOGIC

            //$http.post("api/vet/vets/");
        }
    }]);
