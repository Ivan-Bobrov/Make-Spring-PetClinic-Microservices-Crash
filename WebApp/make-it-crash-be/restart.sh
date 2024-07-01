#!/bin/bash

PASSWORD="ByteBusters"

# Konfigurationsvariablen für den ersten Dienst
SERVER_USER1="otto"
SERVER_IP1="141.22.10.81"
TARGET_DIR1="Make-Spring-PetClinic-Microservices-Crash/"
FILE1="docker-compose.vm1.yml"

# Konfigurationsvariablen für den zweiten Dienst
SERVER_USER2="otto"
SERVER_IP2="141.22.10.82"
TARGET_DIR2="Make-Spring-PetClinic-Microservices-Crash/"
FILE2="docker-compose.vm2.yml"

# Funktion zum Neustarten eines Docker-Compose-Dienstes
restart_service() {
  local server_user=$1
  local server_ip=$2
  local target_dir=$3
  local password=$4
  local file=$5

  ssh ${server_user}@${server_ip} << EOF
    cd ${target_dir}
    echo ${password} | sudo -S docker-compose -f ${file} down
    echo ${password} | sudo -S docker-compose -f ${file} pull
    echo ${password} | sudo -S docker-compose -f ${file} up -d
EOF
}

# Ersten Dienst neu starten
restart_service ${SERVER_USER1} ${SERVER_IP1} ${TARGET_DIR1} ${PASSWORD} ${FILE1}

# Zweiten Dienst neu starten
restart_service ${SERVER_USER2} ${SERVER_IP2} ${TARGET_DIR2} ${PASSWORD} ${FILE2}
