#Node with NGINX via Docker

##Introduction
This is a demo for creating node apps with an nginx proxy via docker. Enjoy...


To run this application you must have docker installed. Then in the console type "docker-compose up"

If you make changes to the code and want to reset, type "docker-compose rm -f" then "docker-compose up --build -d"

Your node application will be running at localhost:8000 after you run "docker-compose up"


Stop containers, remove containers, remove images...

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

docker rmi $(docker images -q)

ecs-cli compose --project-name testing --file docker-compose.yml service up
