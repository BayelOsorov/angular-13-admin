FROM node:14 as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# => Run container
FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html


