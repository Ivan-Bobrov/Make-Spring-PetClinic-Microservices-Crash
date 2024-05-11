#!/bin/bash
kubectl apply -f namespace-bytebusters.yaml
kubectl apply -f dockerconfigjson.yaml

kubectl apply -f config-server-deployment.yaml
kubectl apply -f discovery-server-deployment.yaml

kubectl apply -f vets-service-deployment.yaml
kubectl apply -f visits-service-deployment.yaml
kubectl apply -f customers-service-deployment.yaml
kubectl apply -f admin-server-deployment.yaml

kubectl apply -f api-gateway-deployment.yaml