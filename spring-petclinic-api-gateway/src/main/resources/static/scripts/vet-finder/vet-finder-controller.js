'use strict';

angular.module('VetMapController', [])
    .controller('VetMapController', ['$scope', 'VetFinderService', function($scope, VetFinderService) {
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        $scope.loadVets = function() {
            VetFinderService.findNearbyVets(51.505, -0.09).then(function(response) {
                response.data.forEach(function(vet) {
                    L.marker([vet.lat, vet.lon]).addTo(map)
                        .bindPopup(vet.name);
                });
            });
        };

        $scope.loadVets();  // Load the vet locations when the page loads
    }]);
