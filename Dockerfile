FROM node:latest
COPY . src/dist
CMD ng serve --host 0.0.0.0