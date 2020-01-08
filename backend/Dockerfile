FROM node:12.14.0-alpine3.11

WORKDIR /usr/src/service

COPY . /usr/src/service

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

RUN npm config set unsafe-perm true

RUN npm install -g typescript

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

RUN chmod -R 775 /usr/src/service

# RUN npm install pm2 -g

RUN npm install nodemon -g

RUN npm install

EXPOSE 3030

# CMD ["npm","run","dev"]
CMD ["npm","run","dev"]
CMD tail -f /dev/null
# CMD /wait && npm run dev
# CMD /wait && npm run start
# CMD ["npm","run","start"]
