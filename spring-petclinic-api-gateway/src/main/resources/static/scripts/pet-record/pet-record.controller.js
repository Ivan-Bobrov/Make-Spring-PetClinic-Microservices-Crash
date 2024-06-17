'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$state', '$stateParams', function ($http, $state , $stateParams) {
        var self = this;

        if(!$stateParams.petId || !$stateParams.vetId) {
            $state.go('recordList');
        }

        self.petId = $stateParams.petId;
        self.vetId = $stateParams.vetId;

    }]);
