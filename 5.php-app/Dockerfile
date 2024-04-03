FROM php:7-apache
WORKDIR /var/www/html
COPY src/ .
EXPOSE 80
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
