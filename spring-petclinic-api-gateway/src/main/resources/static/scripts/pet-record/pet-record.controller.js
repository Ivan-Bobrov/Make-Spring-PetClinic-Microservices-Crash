'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$stateParams', function ($http, $stateParams) {
        var self = this;

        $http.get('api/gateway/owners/' + $stateParams.petId).then(function (resp) {
            self.owner = resp.data;
            console.log(resp.data.toString())
        });
        $http.get('api/vet/vets').then(function (resp) {
            self.vetList = resp.data;
        });
    }]);
