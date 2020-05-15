#temp image to build project
FROM node:alpine as client-build
WORKDIR /app
COPY . .
RUN yarn install --silent
RUN yarn build

#publish build on ngix
FROM nginx:alpine
COPY --from=client-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]