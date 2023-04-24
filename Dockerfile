FROM node:18-slim
ENV TZ="Asia/Ho_Chi_Minh"
WORKDIR /app
COPY ./src ./src
COPY package.json ./package.json
RUN rm -f ./package-lock.json
RUN npm config set loglevel verbose
RUN apt-get update

RUN npm install
RUN npm install fastify-cli --global
CMD ["npm", "run", "dev"]
#CMD ["npm", "run", "start:dev"]