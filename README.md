# Order Processing System

### Overview

This project is an order processing system for a large company. The system integrates various specific business rules for different types of products and allows easy maintenance and expansion of these rules.

## Technologies Used

- Node.js
We use Node.js due to its efficiency and scalability. Node.js is ideal for I/O-intensive applications, such as web servers, due to its asynchronous and event-driven execution model.

- Express
Express is a minimal and flexible framework for Node.js, providing a robust set of features for creating web servers and RESTful APIs. It facilitates the creation and management of routes and middleware.

- Mocha and Chai
Mocha is a JavaScript testing framework that runs on Node.js, and Chai is an assertion library for testing. We use Mocha and Chai to write and run unit tests, ensuring that business rules are applied correctly and making it easier to detect regressions.

## Project Structure

- controllers: Contains controllers that manage payment processing logic.
- models: Contains data models, such as the order model.
- rules: Contains business rules that are applied to orders.
- services: Contains auxiliary services, such as email sending and shipment slip creation.
- tests: Contains unit tests to verify the correct functioning of business rules.
- app.js: The entry point of the application.

## How to Run the Project

### Prerequisites
- Node.js installed (recommended LTS version)
- npm (Node.js package manager)

Clone the repository:
```
git clone https://github.com/your-username/order-processing-system.git
cd order-processing-system
```

Install dependencies:
```
npm install
```

Start the server:
```
node app.js
```
The server will be running on port 3000 (or another port defined in the PORT environment variable).

Test the API:
Use a tool like Postman or curl to make POST requests to http://localhost:3000/process-payment with a JSON payload, for example:
```
{
  "id": "1",
  "productType": "physical",
  "isUpgrade": false,
  "isMembership": false
}
```

## How to Run Unit Tests

Add test script in <samp>package.json</samp>:
Make sure the scripts section in package.json includes:
```
{
  "scripts": {
    "test": "mocha 'tests/**/*.test.js'"
  }
}
```

Run the tests:
```
npm test
```
This will run all the unit tests located in the tests directory.
