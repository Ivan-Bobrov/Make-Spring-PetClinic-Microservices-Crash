package org.springframework.samples.petclinic.api.application;

import lombok.RequiredArgsConstructor;
import org.springframework.samples.petclinic.api.dto.InstructorDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class VetsServiceClient {

    private final WebClient.Builder webClientBuilder;

    public Mono<InstructorDetails> getInstructor(final int id) {
        return webClientBuilder.build().get()
            .uri("http://vets-service/vets/{vetId}", id)
            .retrieve()
            .bodyToMono(InstructorDetails.class);
    }

}
