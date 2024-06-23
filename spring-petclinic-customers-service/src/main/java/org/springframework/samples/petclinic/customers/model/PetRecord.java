package org.springframework.samples.petclinic.customers.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.concurrent.atomic.AtomicBoolean;

@Data
@Entity
@Table(name = "pet_records")
public class PetRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;

    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastAccess;

    private boolean locked;

    private Integer lockedBy;
}
