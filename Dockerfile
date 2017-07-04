FROM mhart/alpine-node:6
WORKDIR /bts
ADD . /bts
RUN npm install
EXPOSE 8080
ENV PORT=8080
CMD ["npm", "run", "production"]
