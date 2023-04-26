FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install"] 

COPY . .

RUN chown node:node /app

USER node

ENTRYPOINT [ "npm", "run" ]

CMD [ "nodemon" ]

