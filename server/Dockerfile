# pull official base image
FROM node:alpine as server-build
WORKDIR /server
COPY . ./
RUN yarn install --silent
EXPOSE 5000
CMD ["yarn", "serve"]