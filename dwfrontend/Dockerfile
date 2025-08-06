FROM node:current-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#production
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /var/www/developwright/frontend
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]