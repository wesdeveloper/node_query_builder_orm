#!/bin/bash
echo "Script to construct Database!"
export PGPASSWORD=postgres
psql -h localhost -d postgres -U postgres -p 5432 -a -q -f ./dbs/test/db.sql
