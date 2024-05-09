FROM ubuntu:latest

# Install required packages
RUN apt-get update && \
    apt-get install -y apache2 apache2-utils nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Enable Apache service

# Copy application files
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Install project dependencies
RUN npm install -D node-sass nodemon && \
    npm install

# Expose port 80 for Apache
EXPOSE 80

# Start Apache and run the watch-css script
CMD /usr/sbin/apache2ctl -D FOREGROUND && npm run watch-css
