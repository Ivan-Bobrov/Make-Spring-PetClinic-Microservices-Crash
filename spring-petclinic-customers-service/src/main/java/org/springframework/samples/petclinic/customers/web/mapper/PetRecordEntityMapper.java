package org.springframework.samples.petclinic.customers.web.mapper;


import org.springframework.samples.petclinic.customers.model.PetRecord;
import org.springframework.samples.petclinic.customers.web.PetRecordRequest;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class PetRecordEntityMapper implements Mapper<PetRecordRequest, PetRecord> {

    @Override
    public PetRecord map(PetRecord record, PetRecordRequest request) {
        record.setDescription(request.description());
        record.setLockedBy(-1);
        record.setLastAccess(new Date());
        record.setLocked(false);
        return record;
    }
}
