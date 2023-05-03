# Dockerfile
FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @babel/core @babel/cli

COPY . .

RUN npm run build-src
EXPOSE 5000
CMD [ "npm", "start" ,"build"]

# Xây dựng Docker image
#docker build -t my-node-app .