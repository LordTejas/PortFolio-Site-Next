# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the desired port (default Next.js port is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
