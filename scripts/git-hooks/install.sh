#!/usr/bin/env bash

if [[ "$CI" == "true" ]]; then
  exit 0
fi

dir="$(dirname "$0")"

cp -p "$dir/pre-commit" ".git/hooks"
cp -p "$dir/pre-push" ".git/hooks"
