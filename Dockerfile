FROM node:9.3.0

ENV PORT 80

ENV NODE_ENV production

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 80

CMD ["npm", "start"]