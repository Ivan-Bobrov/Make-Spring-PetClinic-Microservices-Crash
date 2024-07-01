#!/bin/bash

docker-compose down

cd make-it-crash-be
docker build -t ghcr.io/ivan-bobrov/make-spring-petclinic-microservices-crash/make-it-crash-be .
cd ..

cd make-it-crash-fe
docker build -t ghcr.io/ivan-bobrov/make-spring-petclinic-microservices-crash/make-it-crash-fe .
cd ..

docker-compose up -d
