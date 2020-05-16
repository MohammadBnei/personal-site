#!/bin/bash

docker exec site gatsby build

ssh raspberry rm -rf /var/www/personnal-site/*

scp -r portfolio-dev/public/* raspberry1:/var/www/personnal-site/
