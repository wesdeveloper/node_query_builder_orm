#!/bin/bash
echo "Script to construct Database!"
export PGPASSWORD=12345
psql -h localhost -d postgres -U postgres -p 5432 -a -q -f ./dbs/development/db.sql
