FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN ["npm", "i"] 

COPY . .

RUN chown node:node /app

USER node

CMD ["npm", "run", "dev"]
