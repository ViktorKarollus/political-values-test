#!/bin/bash

git pull

docker build -t political-test .

docker stop political-test || true
docker rm political-test || true

docker run -d \
  --restart unless-stopped \
  -p 80:80 \
  --name political-test \
  political-test