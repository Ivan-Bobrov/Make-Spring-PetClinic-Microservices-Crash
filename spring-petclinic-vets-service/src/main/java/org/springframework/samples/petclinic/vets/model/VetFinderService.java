package org.springframework.samples.petclinic.vets.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class VetFinderService {

    private final RestTemplate restTemplate;

    @Autowired
    public VetFinderService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String findNearbyVets(double latitude, double longitude) {
        String overpassUrl = "https://overpass-api.de/api/interpreter";
        String query = "[out:json];node[\"amenity\"=\"veterinary\"](around:5000," + latitude + "," + longitude + ");out;";

        UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(overpassUrl)
            .queryParam("data", query);

        return restTemplate.getForObject(uriBuilder.toUriString(), String.class);
    }
}
