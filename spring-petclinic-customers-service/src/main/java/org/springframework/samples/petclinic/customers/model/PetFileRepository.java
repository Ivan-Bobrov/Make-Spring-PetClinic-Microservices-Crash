package org.springframework.samples.petclinic.customers.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PetFileRepository extends JpaRepository<PetFile, Integer> {
    @Query("FROM PetFile pfile WHERE pfile.pet.id = :petId")
    List<PetFile> findAllByPetId(int petId);
}
