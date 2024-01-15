# Use Debian as the base image
FROM debian:latest

# Install Nginx
RUN apt-get update && \
    apt-get install -y nginx

# make dir  /var/www/html
RUN mkdir -p /var/www/html
# Copy the static website files to the container
COPY ./index.html  /var/www/html/index.html
 # Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80 for Nginx
EXPOSE 80

# Command to start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
