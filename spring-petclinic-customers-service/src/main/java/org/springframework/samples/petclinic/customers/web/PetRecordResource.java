package org.springframework.samples.petclinic.customers.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.samples.petclinic.customers.model.PetRecord;
import org.springframework.samples.petclinic.customers.model.PetRecordRepository;
import org.springframework.samples.petclinic.customers.web.mapper.PetRecordEntityMapper;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RequestMapping("/pet-records")
@RestController
@RequiredArgsConstructor
@Slf4j
public class PetRecordResource {
    private final PetRecordRepository petRecordRepository;
    private final long EXPIRATION_TIME = 180000;
    private final PetRecordEntityMapper petRecordEntityMapper;

    @GetMapping(value = "/{petId}")
    @ResponseStatus(HttpStatus.OK)
    public PetRecord getPetRecord(@PathVariable int petId, @RequestParam int vetId) {
        return tryLock(petId, vetId);
    }

    @PutMapping(value = "/{petId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updatePetRecord(@PathVariable int petId, @RequestParam int vetId, @RequestBody PetRecordRequest petRecordRequest) {
        PetRecord recordModel = tryLock(petId, vetId);
        petRecordEntityMapper.map(recordModel, petRecordRequest);
        log.info("Saving pet record {}", recordModel);
        petRecordRepository.save(recordModel);
    }

    private PetRecord tryLock(Integer petId, Integer vetId) {
        PetRecord record = petRecordRepository.findByPetId(petId).orElseThrow(() -> new ResourceNotFoundException("PetRecord " + petId + " not found"));
        if ((record.isLocked() && !record.getLockedBy().equals(vetId)) && record.getLastAccess().after(new Date(System.currentTimeMillis() - EXPIRATION_TIME))) {
            try {
                Thread.sleep(5000);
                tryLock(petId, vetId);
            } catch (InterruptedException e) {
                log.info(e.getMessage());
            }
        }
        record.setLocked(true);
        record.setLockedBy(vetId);
        record.setLastAccess(new Date());
        petRecordRepository.save(record);

        return record;
    }
}
