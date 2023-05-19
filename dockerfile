FROM node:16.14

USER node

WORKDIR /app

COPY package*.json ./

USER root
RUN npm install
USER node

COPY . .

CMD ["npm", "run", "dev"]