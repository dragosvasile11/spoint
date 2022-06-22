FROM openjdk:latest
RUN mkdir /app
#RUN addgroup --system javauser && adduser -S -s /bin/false -G javauser javauser
COPY ./target/spoint-0.0.1-SNAPSHOT.jar /app/java-application.jar
WORKDIR /app
#RUN chown -R javauser:javauser /app
#USER javauser
VOLUME /tmp
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "java-application.jar"]

#Create jar
#mvn clean install -U dependency:copy-dependencies

#Build image
# docker build -t spoint_backend -f . .

#Run
# docker run --name spoint_backend --rm -dp 8081:8080 spoint_backend

#Database postgres
#docker run --name spoint -e POSTGRES_PASSWORD=vlad -p 5432:5432 -v postgres-data:/var/lib/postgresql/data -d postgres:latest
#docker run -e POSTGRES_USERNAME=xyz postgres