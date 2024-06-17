package org.springframework.samples.petclinic.customers.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.style.ToStringCreator;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @Getter
    @Setter
    @Column(name = "name")
    @NotBlank
    private String name;

    @Getter
    @Setter
    @Column(name = "description")
    @NotBlank
    private String description;

    @Getter
    @Setter
    @Column(name = "instructor")
    private int instructorId;

    @Override
    public String toString() {
        return new ToStringCreator(this)
            .append("id", this.getId())
            .append("name", this.getName())
            .append("description", this.getDescription())
            .toString();
    }
}
