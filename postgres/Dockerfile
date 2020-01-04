FROM postgres
COPY setup.sql /
ADD setup.sql /docker-entrypoint-initdb.d/
RUN chmod a+r /docker-entrypoint-initdb.d/*
