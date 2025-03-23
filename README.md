
# AppleVerse E-Commerce Platform

## Introduction

The AppleVerse E-Commerce Platform is a microservices-based application developed using Java, Spring Boot, React.js, and MySQL. The system consists of five core microservices:

* User Service – Handles user authentication, profile management, and access control.

* Product Service – Manages product catalog, including adding, updating, and retrieving product details.

* Cart Service – Allows users to add, update, and remove products from their cart before proceeding to checkout.

* Order Service – Manages order placement, payment processing, and order history tracking.

* Admin Service – Enables admins to manage products, users, and orders.






## Technologies Used

* Backend: Java, Spring Boot
* Frontend: React.js, Tailwind CSS, API
* Database: MySQL


## Features

1.Microservices Architecture
* Each service is independently deployed, allowing scalability and maintainability.
* Services communicate via REST APIs.

2.Real-Time Product Updates
* Admin updates products instantly using Spring Boot's event-driven architecture and WebSockets.
* React.js dynamically updates the UI without requiring a full page reload.

3.Spring Boot for Backend
* Implemented RESTful APIs for efficient communication between services.
* Used Spring Security & JWT for authentication and authorization.

4.React.js for Frontend
* Created a responsive UI using React with Tailwind CSS.
* Used Redux or Context API for state management.

5.MySQL Database
* Each microservice has its own dedicated database to ensure data isolation.
* Used JPA & Hibernate for ORM.
## Installation
1.Clone the repository:

        git clone https://github.com/Sudharaka200/Apple-verse-app

2.Set up the database:
* Create databases for each microservice in MySQL.
* Update database credentials in each service's configuration file.

3.Build and run the backend services:

        mvn clean install
        java -jar target/service-name.jar

3.Start the frontend:

        cd frontend
        npm install
        npm start


## Contribution Guidelines

* Fork the repository and create a new branch.
* Commit changes with clear messages.
* Submit a pull request for review.



## Contact
Feel free to reach out with questions or collaboration ideas:

Sudharaka Pathiraja   
Email: sudharakadulanjith200@gmail.com  
Github :https://github.com/Sudharaka200  
Linkedin : www.linkedin.com/in/sudharaka-pathiraja-10646820b

