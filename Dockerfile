FROM node:16.15.1 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY --from=build /usr/src/app/dist /usr/share/nginx/html