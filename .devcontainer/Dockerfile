FROM node:14
ARG TIMEZONE
ARG NODE_ENV 

ENV NODE_ENV ${NODE_ENV}

RUN mkdir -p /var/www/next
WORKDIR /var/www/next
COPY ./entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

