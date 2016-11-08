#!/bin/bash

for i in $(find . -name *.jpg); do
  file=${i%.*}
  if [[ $i == *"thumb"* ]]; then
    continue;
  fi

  echo Generating thumb for: $i
  convert -thumbnail x500 $i $file.thumb.jpg
done
