# Using the official MongoDB image as the base image
FROM mongo:latest

# Copy the data initialization script to the container
COPY init.js /docker-entrypoint-initdb.d/

RUN usermod -a -G docker jenkins

# Expose the MongoDB port
EXPOSE 27017