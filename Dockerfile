# https://github.com/mhart/alpine-node
FROM mhart/alpine-node:6

MAINTAINER Stephen G. Friend, hello@stephengfriend.com

ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA=${GIT_COMMIT_SHA:-development} \
    DIR=/opt/cmsbl PORT=3000 \
    PATH="./node_modules/.bin:${PATH}"

COPY package.json $DIR/

RUN apk add --update autoconf automake bash build-base file git libpng-dev nasm zlib-dev && \
  cd $DIR && echo "# REPLACE ME" > README.md && \
  npm install --no-progress && \
  apk del autoconf automake bash build-base file git libpng-dev nasm zlib-dev && \
  rm -rf /etc/ssl /usr/share/man /tmp/* /var/cache/apk/* /root/.npm \
    /root/.node-gyp /usr/lib/node_modules/npm/man \
    /usr/lib/node_modules/npm/doc /usr/lib/node_modules/npm/html

COPY . $DIR/

WORKDIR $DIR

RUN npm run build

EXPOSE $PORT

VOLUME $DIR

CMD ["npm", "run", "start:prod"]
