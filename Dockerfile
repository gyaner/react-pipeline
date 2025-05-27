# Use a lightweight web server
FROM nginx:alpine

# Copy the build output to Nginx's public folder
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
