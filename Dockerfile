FROM node:12.0
RUN mkdir /client
ADD . /client
WORKDIR /client
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]