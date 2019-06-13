select pg_terminate_backend(pid) from pg_stat_activity where datname='node_query_builder_orm';
DROP DATABASE node_query_builder_orm;
CREATE DATABASE node_query_builder_orm;
