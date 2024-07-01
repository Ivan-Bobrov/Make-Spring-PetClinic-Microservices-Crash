'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$state', '$stateParams', '$scope', function ($http, $state, $stateParams, $scope) {
        const self = this;

        if(!$stateParams.petId || !$stateParams.vetId) {
            $state.go('recordList');
        }

        $scope.loading = true;
        $scope.error = false;
        $http.get(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`).then(function(response) {
            self.record = response.data;
        }).catch((error) => {
            $scope.error = true;
        }).finally(() => {
            $scope.loading = false;
        });

        self.description = $stateParams.description;

        self.submitRecordForm = function () {
            $http.put(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`, {description: self.description}).then(function () {
                $state.go('recordList');
            });
        }
}]);
