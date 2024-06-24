'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$state', '$stateParams', '$scope', function ($http, $state , $stateParams, $scope) {
        const self = this;

        $scope.loading = true;
        $http.get(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`).then(function (resp) {
            self.record = resp.data;
        }).finally(function () {
            $scope.loading = false;
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
