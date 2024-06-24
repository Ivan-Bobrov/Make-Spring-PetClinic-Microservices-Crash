#!/bin/bash
./mvnw clean install -P buildDocker -DskipTests

./docker/push-images.sh

#docker compose up
