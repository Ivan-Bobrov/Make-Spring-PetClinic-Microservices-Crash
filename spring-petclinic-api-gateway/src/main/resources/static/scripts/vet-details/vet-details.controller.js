'use strict';

angular.module('vetDetails')
    .controller('VetDetailsController', ['$http', '$state', '$stateParams', function ($http, $state, $stateParams) {
        var self = this;
        self.selectedVetId = null;

        $http.get('api/vet/vets').then(function (resp) {
            self.vetList = resp.data;
            for(var i=0; i < self.vetList.length; i++){
                console.log("vet id: " + self.vetList[i].id + " vet id: " + $stateParams.vetId);
                if(self.vetList[i].id == $stateParams.vetId){
                    self.vetList.splice(i, 1);
                    //break;
                }
            }

            //console.log("vet id: " + vet.id + " vet id: " + $stateParams.vetId);

        });

        $http.get('api/gateway/vets/' + $stateParams.vetId).then(function (resp) {
            self.vet = resp.data;
        });

        $http.get('api/vet/vets/' + $stateParams.vetId+'/available').then(function (resp){
            self.available = resp.data;
        });


        self.setAvailable = function(){
            let vetId = self.vet.id;
            $http.post("api/vet/vets/" + vetId + "/available", self.available);
        }



        var req;
        self.submitVet =  function () {
            if (self.selectedVetId == null){
                return;
            }

            var vetId = $stateParams.vetId;
            var substitute = self.selectedVetId;

            req = $http.post("api/vet/vets/" + vetId + "/sub", substitute);
            req.then(function () {
                $state.go('vets');
            });
        }
    }]);
