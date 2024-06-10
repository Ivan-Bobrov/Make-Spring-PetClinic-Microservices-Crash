package org.springframework.samples.petclinic.gatling;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GatlingBackend {

    public static void main(String[] args) {
        SpringApplication.run(GatlingBackend.class, args);
    }
}
