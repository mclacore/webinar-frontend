# Use the official lightweight Node.js 18 image.
FROM node:18-alpine

# Install necessary packages
RUN apk --no-cache add curl

# Create and change to the app directory.
WORKDIR /app

# Copy all local files into the container.
COPY . .

# Install serve package globally
RUN npm install -g serve

# Copy the entrypoint script and make it executable
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set the entrypoint script to run when the container starts
ENTRYPOINT ["entrypoint.sh"]

# Command to run the serve command to serve the static site on the specified port.
CMD ["serve", "-s", ".", "-l", "8000"]

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 8000
