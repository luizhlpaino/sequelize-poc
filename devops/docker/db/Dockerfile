#base image from docker hub
FROM mcr.microsoft.com/mssql/server:2019-latest

#database port
EXPOSE 8001

#copy db files to container
COPY ../../../db sequelize-db/

#build: docker build --rm -t sequelize-db -f ./devops/docker/db/Dockerfile .
#run: docker run -p 8001:8001 -w /sequelize-db/ -d --env-file ./devops/docker/db/.env --name sequelize-db sequelize-db ./deploy.bat
#exec: docker exec -it sequelize-db /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Db123456
#exec: docker exec -it sequelize-db sh