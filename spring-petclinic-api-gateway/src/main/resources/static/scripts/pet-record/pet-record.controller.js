'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$state', '$stateParams', '$scope', function ($http, $state , $stateParams, $scope) {
        const self = this;

        if(!$stateParams.petId || !$stateParams.vetId) {
            $state.go('recordList');
        }

        $scope.loading = true;
        $scope.error = false;
        console.log($scope.error);
        $http.get(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`).then(successCallback).error(errorCallback).finally(function () {
            $scope.loading = false;
        });

        function successCallback(response) {
            console.log("Here");
            self.record = response.data;
        }

        function errorCallback(response) {
            $scope.error = true;
            console.log($scope.error);
        }

        self.description = $stateParams.description;

        self.submitRecordForm = function () {
            $http.put(`api/customer/pet-records/${$stateParams.petId}?vetId=${$stateParams.vetId}`, {description: self.description}).then(function () {
                $state.go('recordList');
            });
        }

    }]);
