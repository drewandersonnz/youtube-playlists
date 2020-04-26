#!/bin/bash

if [ ! -f ./.git/config ]; then
    echo "Not in respository root";
    exit 1;
fi

echo "Browse to http://127.0.0.1:8080/ to see the served website"

docker run --rm -it \
  --volume="$PWD:/srv/jekyll" \
  -p 8080:4000 \
  jekyll/jekyll:3.8 \
  jekyll serve
