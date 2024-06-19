package org.springframework.samples.petclinic.customers.web;

import org.springframework.samples.petclinic.customers.model.PetRecord;

public record PetRecordDetails(int id,
                               String pet_name,
                               String description) {
    public PetRecordDetails(PetRecord petRecord) {
        this(petRecord.getId(), petRecord.getPet().getName(), petRecord.getDescription());
    }
}
