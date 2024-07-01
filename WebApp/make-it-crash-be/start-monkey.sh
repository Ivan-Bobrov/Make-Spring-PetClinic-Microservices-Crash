#!/bin/bash

PASSWORD="ByteBusters"

# Konfigurationsvariablen für den zweiten Dienst
SERVER_USER2="otto"
SERVER_IP2="141.22.10.82"
TARGET_DIR2="Make-Spring-PetClinic-Microservices-Crash/"


start_monkey() {
  local server_user=$1
  local server_ip=$2
  local target_dir=$3
  local password=$4

  sshpass -p "${password}" ssh -o StrictHostKeyChecking=no ${server_user}@${server_ip} << EOF
    cd ${target_dir}
    echo ${password} | sudo -S ./scripts/chaos/call_chaos.sh vets attacks_enable_latency watcher_enable_restcontroller

EOF
}


# Ersten Dienst neu starten
start_monkey ${SERVER_USER2} ${SERVER_IP2} ${TARGET_DIR2} ${PASSWORD}
