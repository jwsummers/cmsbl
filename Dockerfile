# https://github.com/mhart/alpine-node
FROM mhart/alpine-node:6

ENV DIR=/opt/cmsbl PORT=3000 PATH="./node_modules/.bin:${PATH}"

COPY package.json $DIR/

RUN cd $DIR && npm install

COPY . $DIR/

RUN cd $DIR && npm run build

EXPOSE $PORT

VOLUME $DIR

WORKDIR $DIR

CMD ["npm", "run", "start:prod"]
