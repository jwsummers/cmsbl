# https://github.com/mhart/alpine-node
FROM mhart/alpine-node:6

ENV DIR=/opt/cmsbl PORT=8000 NODE_ENV=production

COPY package.json ${DIR}/

RUN npm install

COPY . $DIR

WORKDIR $DIR

RUN npm run build -- -p

EXPOSE $PORT

ENTRYPOINT ["npm"]

CMD ["start"]
