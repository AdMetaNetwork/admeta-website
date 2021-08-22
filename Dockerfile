FROM node:14
COPY . /app
WORKDIR /the/workdir/path
CMD npm run start
