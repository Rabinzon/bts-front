FROM mhart/alpine-node:6
WORKDIR /bts
ADD . /bts
RUN npm install
EXPOSE 8585
ENV PORT=8585
CMD ["npm", "run", "production"]
