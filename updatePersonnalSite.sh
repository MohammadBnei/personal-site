#!/bin/bash

docker exec site gatsby build

ssh raspberry1 rm -rf /var/sites/portfolio/*

scp -r public/* raspberry1:/var/sites/portfolio
