FROM eclipse-temurin:17 AS build

WORKDIR /app

COPY . /app

RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17

RUN apt-get update && apt-get install -y openssh-server

RUN apt-get install sshpass

WORKDIR /app

COPY ./restart.sh /app

RUN chmod +x /app/restart.sh

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
