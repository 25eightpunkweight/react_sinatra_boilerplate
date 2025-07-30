#!/bin/bash
set -e

export PGHOST="${PGHOST:-db}"
export PGUSER="${PGUSER:-postgres}"

# Wait for the database to be ready
# until pg_isready -h "$HOST" -U "$HOST"; do
#   echo "Waiting for postgres..."
#   sleep 1
# done

# Wait for the database to be ready using Ruby and PG gem
until ruby -e "require 'pg'; PG.connect(host: ENV['PGHOST'], user: ENV['PGUSER'])" 2>/dev/null; do
  echo "Waiting for postgres..."
  sleep 1
done

export RAILS_ENV=${RAILS_ENV:-development}

# Prepare and seed the database
bundle exec rails db:prepare db:seed

# Start the Rails server
exec  bundle exec rails s -b '::' -p 3000