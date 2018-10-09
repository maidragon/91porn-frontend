FROM nginx
COPY dist /var/www/html
EXPOSE 80