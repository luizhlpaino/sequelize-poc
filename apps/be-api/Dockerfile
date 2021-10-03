#base docker image from docker hub
FROM node:16.8-alpine
#application port
EXPOSE 8001

#copy repo files to container
COPY . sequelize-api/

#set sequelize-api folder as the working directory
WORKDIR /sequelize-api/

#install node dependencies
RUN npm install

#build: docker build --rm -t sequelize-api -f ./devops/docker/apps/be-api/Dockerfile .
#run: docker run -d -w /sequelize-api/ --name sequelize-api -p 8001:8001 --env-file devops/docker/apps/be-api/.env sequelize-api node index.js