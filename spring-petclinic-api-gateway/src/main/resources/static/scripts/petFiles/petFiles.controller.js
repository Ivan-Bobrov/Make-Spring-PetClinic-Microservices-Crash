'use strict';

angular.module('petFiles')
    .controller('PetFilesController', ['$http', '$state', '$stateParams', '$filter', function ($http, $state, $stateParams, $filter) {
        var self = this;
        var petId = $stateParams.petId || 0;
        var url = "api/customer/owners/" + ($stateParams.ownerId || 0) + "/pets/" + petId + "/files";
        self.date = new Date();
        self.desc = "";

        function getFiles() {
            $http.get(url).then(function (resp) {
                self.files = resp.data;
            });
        }

        getFiles();

        self.uploadFile = function () {
            var file = document.getElementById('file').files[0];

            var parts = file.name.toString().split(".");
            var fileType = parts[parts.length-1];
            console.log(fileType)
            if (fileType !== "pdf") {
                alert("Only PDF files are allowed. Please select a valid file.");
                return;
            }

            var fileSizeMB = file.size / 1024 / 1024;
            if (fileSizeMB > 5) {
                alert("File size exceeds the 5MB limit. Please select a smaller file.");
                return;
            }

            var formData = new FormData();
            formData.append('file', file);
            formData.append('date', $filter('date')(self.date, "yyyy-MM-dd"));
            formData.append('description', self.desc);

            $http.post(url, formData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            }).then(function () {
                alert("File: " + file.name + " was uploaded successfully!\n" +"file size: "+ file.size/1024/1024 + " MB");
                return $http.get(url);
            }).then(function (response) {
                self.files = response.data;
                $state.go('petDetails', { petID: petId });
            });

        };

    }]);
