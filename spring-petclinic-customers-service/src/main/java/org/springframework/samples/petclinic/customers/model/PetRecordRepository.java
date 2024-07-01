package org.springframework.samples.petclinic.customers.model;

import jakarta.persistence.LockModeType;
import jakarta.persistence.QueryHint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.QueryHints;

import java.util.Optional;

public interface PetRecordRepository extends JpaRepository<PetRecord, Integer> {
    @Lock(LockModeType.PESSIMISTIC_READ)
    Optional<PetRecord> findByPetId(Integer petId);
}
