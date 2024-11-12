# Use the official Nginx image as a base
FROM nginx:latest

# Copy the HTML, CSS, and JavaScript files into the Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]