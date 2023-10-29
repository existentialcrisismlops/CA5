# Using the official MongoDB image as the base image
FROM mongo:latest

# Copy the data initialization script to the container
COPY init.js /docker-entrypoint-initdb.d/

# Expose the MongoDB port
EXPOSE 27017