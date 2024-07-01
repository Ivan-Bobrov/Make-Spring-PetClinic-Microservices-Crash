'use strict';

angular.module('visits')
    .controller('VisitsController', ['$http', '$state', '$stateParams', '$filter', function ($http, $state, $stateParams, $filter) {
        var self = this;
        var petId = $stateParams.petId || 0;
        var url = "api/visit/owners/" + ($stateParams.ownerId || 0) + "/pets/" + petId + "/visits";
        self.date = new Date();
        self.desc = "";
        self.selectedVetId = null;

        $http.get(url).then(function (resp) {
            self.visits = resp.data;
        });

        $http.get('api/vet/vets').then(function (resp) {
            self.vetList = resp.data;
        });

        self.submit = function () {
            let subtext = "";
            $http.get('api/vet/vets/' + self.selectedVetId + '/chose').then(function (resp) {
                    var availableVet = resp.data;
                    console.log("DEBUG: availableVet= "+ availableVet)
                    if (availableVet === -1) {
                        alert("Vet and their substitute are not available at this time");
                        return;
                    }
                    var data = {
                        date: $filter('date')(self.date, "yyyy-MM-dd"),
                        description: self.desc,
                        vetId: availableVet
                    };
                    if(self.selectedVetId != data.vetId){
                        let firstname = self.vetList[availableVet-1].firstName;
                        let lastname = self.vetList[availableVet-1].lastName;
                        subtext = "\n\nOriginally requested vet was not available, substitute (" + firstname + " " + lastname + ") was booked instead.";
                    }
                    console.log("DEBUG: data= "+ data)
                    $http.post(url, data).then(function () {
                        $state.go('ownerDetails', {ownerId: $stateParams.ownerId});
                    });
                    alert("Visit added " + subtext)
                }
            );
        };
    }]);
