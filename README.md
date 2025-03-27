# docker_web_app_example
 
Mateusz Kędra 6.6

docker build --build-arg VERSION=1.0.0 -t server-info-app .
docker run -d -p 8080:80 --name server-info server-info-app
curl http://localhost:8080