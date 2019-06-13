select pg_terminate_backend(pid) from pg_stat_activity where datname='db_development';
DROP DATABASE db_development;
CREATE DATABASE db_development;
