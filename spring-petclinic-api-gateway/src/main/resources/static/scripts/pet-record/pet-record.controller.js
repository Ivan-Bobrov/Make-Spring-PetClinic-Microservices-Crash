'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$state', '$stateParams', function ($http, $state , $stateParams) {
        const self = this;

        $http.get(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`).then(function (resp) {
            self.record = resp.data;
        });

        if(!$stateParams.petId || !$stateParams.vetId) {
            $state.go('recordList');
        }

        self.description = $stateParams.description;

        self.submitRecordForm = function () {
            $http.put(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`, {description: self.description}).then(function () {
                $state.go('recordList');
            });
        }

    }]);
