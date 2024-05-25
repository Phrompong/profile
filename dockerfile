# Use Node.js base image
FROM node:14.17.0-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

COPY .env ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]
