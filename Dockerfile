FROM node:latest
COPY . /Web
CMD ng serve --host 0.0.0.0