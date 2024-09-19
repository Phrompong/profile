@echo off
set version=1.0.2

docker build -t profile:%version% .

docker tag profile:%version% registry.digitalocean.com/phrompong-registry/profile:%version%

docker push registry.digitalocean.com/phrompong-registry/profile:%version%