FROM mhart/alpine-node:6
WORKDIR /bts
ADD . /bts
RUN npm install && npm run build
EXPOSE 8080
CMD ["node", "dist/server.js"]
