package org.springframework.samples.petclinic.api.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class InstructorDetails {
    private Integer id = null;

    private String firstName = null;

    private String lastName = null;

    private List<Specialty> specialties = new ArrayList<>();
}
