#!/bin/bash

docker exec site gatsby build

ssh raspberry rm -rf /var/www/personnal-site/*

mkdir portfolio-dev/public/csvreader

scp -r portfolio-dev/public/* raspberry:/var/www/personnal-site/
