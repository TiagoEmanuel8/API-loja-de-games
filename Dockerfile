FROM node:16.14

USER node

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install"] 

COPY . .

CMD ["npm", "run", "dev"]
