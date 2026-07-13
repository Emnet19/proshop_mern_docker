# # Build stage
# FROM node:20 AS build

# WORKDIR /app

# COPY frontend/package*.json ./

# RUN npm install

# COPY frontend ./

# ENV NODE_OPTIONS=--openssl-legacy-provider

# RUN npm run build


# # Production stage
# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]



FROM node:20 AS build

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend ./

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]