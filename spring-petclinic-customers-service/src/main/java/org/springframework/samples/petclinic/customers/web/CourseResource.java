package org.springframework.samples.petclinic.customers.web;

import io.micrometer.core.annotation.Timed;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.samples.petclinic.customers.model.Course;
import org.springframework.samples.petclinic.customers.model.CourseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/courses")
@RestController
@Timed("petclinic.course")
@RequiredArgsConstructor
@Slf4j
class CourseResource {

    record CourseDto (int id, String name){}
    private final CourseRepository courseRepository;

    @GetMapping(value = "/{courseId}")
    public Optional<Course> findCourse(@PathVariable("courseId") @Min(1) int courseId) {
        return courseRepository.findById(courseId);
    }

    @GetMapping
    public List<CourseDto> findAll() {
        return courseRepository.findAll().stream().map(course -> new CourseDto(course.getId(), course.getName())).toList();
    }

}
