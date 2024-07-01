package org.springframework.samples.petclinic.customers.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PetRecordRepository extends JpaRepository<PetRecord, Integer> {
    Optional<PetRecord> findByPetId(Integer petId);
}
