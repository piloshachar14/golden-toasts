FROM nginx:latest

COPY /dist /var/www
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY /nginx/cors.conf /etc/nginx/conf.d/cors.conf

WORKDIR /usr/share/ngnix/html

RUN touch /var/run/nginx.pid
RUN chmod 777 /var/run/nginx.pid
RUN chmod 777 /var/cache/nginx

EXPOSE 4200

RUN chmod 777 /usr/share/ngnix/html
RUN chmod 777 /var/www/*

USER ngnix

CMD ["nginx", "-g", "daemon off;"]

