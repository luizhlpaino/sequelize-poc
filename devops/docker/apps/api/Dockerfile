#base docker image from docker hub
FROM node:16.8-alpine
#application port
EXPOSE 8000

#copy repo files to container
COPY ../../../../apps/api sequelize-api/

#set sequelize-api folder as the working directory
WORKDIR /sequelize-api/

#install node dependencies
RUN npm install

#build: docker build --rm -t sequelize-api -f ./devops/docker/apps/api/Dockerfile .
#run: docker run -d -w /sequelize-api/ --name sequelize-api -p 8000:8000 --env-file devops/docker/apps/api/.env sequelize-api node index.js