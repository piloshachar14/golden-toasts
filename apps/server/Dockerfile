FROM node:latest

WORKDIR /app

COPY ./dist .
RUN npm i --omit=dev
RUN npm i rxjs 
RUN chmod -R 777 /app
EXPOSE 3000
CMD ["node", "main.js"]
