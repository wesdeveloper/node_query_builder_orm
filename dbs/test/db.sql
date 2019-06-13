select pg_terminate_backend(pid) from pg_stat_activity where datname='db_test';
DROP DATABASE db_test;
CREATE DATABASE db_test;
