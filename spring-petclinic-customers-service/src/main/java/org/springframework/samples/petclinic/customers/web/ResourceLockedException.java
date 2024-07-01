package org.springframework.samples.petclinic.customers.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class ResourceLockedException extends RuntimeException {

    public ResourceLockedException(String message) {
        super(message);
    }
}
