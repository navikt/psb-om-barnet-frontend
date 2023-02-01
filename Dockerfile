FROM nginxinc/nginx-unprivileged:1.23.3-alpine

RUN rm /etc/nginx/conf.d/default.conf
ADD server.nginx /etc/nginx/conf.d/app.conf.template
COPY build /usr/share/nginx/html
ADD start-server.sh ./start-server.sh

EXPOSE 8585

# using bash over sh for betterssignal-handling
CMD sh /start-server.sh          
