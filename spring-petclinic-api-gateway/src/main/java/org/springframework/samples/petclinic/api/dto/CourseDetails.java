package org.springframework.samples.petclinic.api.dto;

import lombok.Data;

@Data
public class CourseDetails {

    private Integer id;

    private String name;

    private String description;

    private Integer instructorId;

    private InstructorDetails instructorDetails;
}
