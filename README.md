# Coffee Database Angular and Spring Boot CRUD App

- A CRUD (create, read, update, delete) app running on Angular and Spring Boot
- Backend utilized Spring Boot with Spring Web MVC for a REST controller and Spring Data JPA for interaction with MySQL database
- Frontend is made with Angular, HTTPClient & Router

## Use

- To start backend cd into `backend` directory and run `mvn spring-boot:run`
- To start frontend cd into `frontend` directory and run `ng serve --port 8081` (port 8081 specified for CORS)
- Also need to have MySQL running
  - as well as password stored in an environment variable named `DB_PASSWORD`
  - note currently we let jbdc automatically take care of setting up, creating, and editing tables
  - I had to manually change the data type of the "notes" column to a text version (TEXT(size), MEDIUMTEXT, LONGTEXT, etc.)
  - This can be done like so: `ALTER TABLE coffees MODIFY notes LONGTEXT;`
- Then simply navigate to [localhost:8081](localhost:8081)

## Tech Stack

- Java 8
- Spring Boot (With Spring Web MVC, Spring Data JPA)
- MySQL
- Maven
- Angular

## Routes

## Structure
