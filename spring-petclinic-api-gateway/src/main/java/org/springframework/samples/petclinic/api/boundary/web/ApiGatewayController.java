package org.springframework.samples.petclinic.api.boundary.web;

import io.github.resilience4j.retry.annotation.Retry;
import lombok.RequiredArgsConstructor;
import org.springframework.cloud.client.circuitbreaker.ReactiveCircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.ReactiveCircuitBreakerFactory;
import org.springframework.samples.petclinic.api.application.CustomersServiceClient;
import org.springframework.samples.petclinic.api.application.VisitsServiceClient;
import org.springframework.samples.petclinic.api.dto.OwnerDetails;
import org.springframework.samples.petclinic.api.dto.Visits;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/gateway")
public class ApiGatewayController {

    private final CustomersServiceClient customersServiceClient;
    private final VisitsServiceClient visitsServiceClient;
    private final ReactiveCircuitBreakerFactory cbFactory;

    @GetMapping(value = "owners/{ownerId}")
    @Retry(name = "getOwnerDetails", fallbackMethod = "fallbackGetOwnerDetails")
    public Mono<OwnerDetails> getOwnerDetails(final @PathVariable int ownerId) {
        Mono<OwnerDetails> ownerMono = customersServiceClient.getOwner(ownerId)
            .transform(it -> {
                ReactiveCircuitBreaker cb = cbFactory.create("getOwnerDetails");
                return cb.run(it, throwable -> Mono.empty());
            });

        Mono<Visits> visitsMono = ownerMono.flatMap(owner ->
            visitsServiceClient.getVisitsForPets(owner.getPetIds())
                .transform(it -> {
                    ReactiveCircuitBreaker cb = cbFactory.create("getOwnerDetails");
                    return cb.run(it, throwable -> emptyVisitsForPets());
                })
        );

        return ownerMono.zipWith(visitsMono, this::combineOwnerWithVisits);
    }

    private OwnerDetails combineOwnerWithVisits(OwnerDetails owner, Visits visits) {
        owner.getPets()
            .forEach(pet -> pet.getVisits()
                .addAll(visits.getItems().stream()
                    .filter(v -> v.getPetId() == pet.getId())
                    .collect(Collectors.toList()))
            );
        return owner;
    }

    private Mono<Visits> emptyVisitsForPets() {
        return Mono.just(new Visits());
    }

    private Mono<OwnerDetails> fallbackGetOwnerDetails(int ownerId, Throwable t) {
        return Mono.just(new OwnerDetails());
    }
}
