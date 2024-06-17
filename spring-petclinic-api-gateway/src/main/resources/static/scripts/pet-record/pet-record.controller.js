'use strict';

angular.module('petRecord')
    .controller('PetRecordController', ['$http', '$stateParams', function ($http, $stateParams, $state) {
        var self = this;

        self.petId = $stateParams.petId;
        self.vetId = $stateParams.vetId;

    }]);
