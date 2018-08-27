FROM php:7.1-apache
RUN apt-get update --fix-missing
RUN apt-get install -y git \
                       libaio1 \
                       apt-transport-https \
                       curl \
                       libmcrypt-dev \
                       zlib1g-dev \
                       libxslt-dev \
                       libpng-dev \
                       libfontconfig \
                       ca-certificates

RUN docker-php-ext-install -j$(nproc) pdo \
                                        pcntl \
                                        mcrypt \
                                        mbstring \
                                        tokenizer \
                                        zip \
                                        mysqli \
                                        pdo_mysql \
                                        xsl \
                                        gd

ENV XDEBUGINI_PATH=/usr/local/etc/php/conf.d/xdebug.ini
RUN yes | pecl install xdebug
RUN echo "zend_extension="`find /usr/local/lib/php/extensions/ -iname 'xdebug.so'` > $XDEBUGINI_PATH \
    && echo "xdebug.remote_enable=on" >> $XDEBUGINI_PATH \
    && echo "xdebug.remote_autostart=on" >> $XDEBUGINI_PATH \
    && echo "xdebug.remote_connect_back=on" >> $XDEBUGINI_PATH \
    && echo "xdebug.idkey=xdbg" >> $XDEBUGINI_PATH \
    && echo "xdebug.remote_handler=dbgp" >> $XDEBUGINI_PATH \
    && echo "xdebug.profiler_enable=0" >> $XDEBUGINI_PATH \
    && echo "xdebug.profiler_output_dir=\"/var/www/html\""  >> $XDEBUGINI_PATH \
    && echo "xdebug.remote_port=9000"  >> $XDEBUGINI_PATH

RUN echo "xdebug.remote_host="`/sbin/ip route|awk '/default/ { print $3 }'` >> $XDEBUGINI_PATH

# Install Composer
RUN curl https://getcomposer.org/installer | php
RUN mv composer.phar /usr/bin/composer

WORKDIR /var/www/html/api/

COPY composer.json  /var/www/html/api/

RUN composer install

COPY . /var/www/html/api/
