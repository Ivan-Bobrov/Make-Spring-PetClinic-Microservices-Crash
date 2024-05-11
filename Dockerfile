#Testing

FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests


FROM openjdk:17
EXPOSE 8888
COPY --from=build /app/spring-petclinic-config-server/target/*.jar app.jar
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "/app.jar"]

FROM openjdk:17
EXPOSE 8761
COPY --from=build /app/spring-petclinic-discovery-server/target/*.jar app.jar
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "/app.jar"]


#.....
