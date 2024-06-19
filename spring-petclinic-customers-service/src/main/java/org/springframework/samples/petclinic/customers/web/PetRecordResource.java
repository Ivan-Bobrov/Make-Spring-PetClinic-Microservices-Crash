package org.springframework.samples.petclinic.customers.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.samples.petclinic.customers.model.PetRecord;
import org.springframework.samples.petclinic.customers.model.PetRecordRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RequestMapping("/pet-records")
@RestController
@RequiredArgsConstructor
public class PetRecordResource {
    private final PetRecordRepository petRecordRepository;
    private final long EXPIRATION_TIME = 1800000;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PetRecord> getAllPetRecords() {
        return petRecordRepository.findAll();
    }

    @GetMapping(value = "/{petId}")
    @ResponseStatus(HttpStatus.OK)
    public PetRecord getPetRecord(@PathVariable int petId, @RequestParam int vetId) {
        return tryLock(petId, vetId);
    }

    @PutMapping(value = "/{petId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updatePetRecord(@PathVariable int petId, @RequestParam int vetId, @RequestBody PetRecordRequest petRecord) {
        PetRecord record = tryLock(petId, vetId);

        record.setDescription(petRecord.description());
        record.setLockedBy(-1);
        record.setLastAccess(new Date());
        record.getLocked().set(false);
        petRecordRepository.save(record);
    }

    private PetRecord tryLock(Integer petId, Integer vetId) {
        PetRecord record = petRecordRepository.findByPetId(petId).orElseThrow(() -> new ResourceNotFoundException("PetRecord " + petId + " not found"));
        while ((record.getLocked().get() && !record.getLockedBy().equals(vetId)) || record.getLastAccess().after(new Date(System.currentTimeMillis() - EXPIRATION_TIME))) {
            try {
                wait(5000);
                record = petRecordRepository.findByPetId(petId).orElseThrow(() -> new ResourceNotFoundException("PetRecord " + petId + " not found"));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        record.getLocked().set(true);
        record.setLockedBy(vetId);
        record.setLastAccess(new Date());

        return record;
    }
}
