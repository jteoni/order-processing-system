# Order Processing System

### Overview

This project is an order processing system for a large company. The system integrates various specific business rules for different types of products and allows easy maintenance and expansion of these rules.
## Key Features

- Flexible Business Rules: Implements a rule-based engine to handle diverse order types with specific processing logic.
- Modular Architecture: Organized into modules for order processing, notifications, and rule management to enhance scalability and maintainability.
- Integration-ready: Designed to integrate with external systems and APIs for seamless business operations.

## File Structure

The project's file structure is organized to enhance modularity and maintainability:

- plugins/: Contains modules for specific business rules (example_plugin).
- rules_engine/: Implements the rule engine (rules_engine.py) to process orders based on predefined rules.
- models/: Includes data models such as Payment, Shipment, Membership, etc., to represent different entities in the system.
- services/: Implements service layers (order_processing, notification_service) that handle core business logic and interactions.
- tests/: Contains unit tests (test_*.py) to validate the functionality of business rules and system components.

## Tools and Technologies Used

- Python: Programming language used for backend development.
- Flask: Lightweight web framework used to expose APIs (run.py).
- pytest: Framework for writing and executing unit tests (tests/).
- SMTP Library: Utilized for email notifications (notification_sender.py).
- Requests Library: Used for making HTTP requests to external APIs (services/).

## Installation and Setup

To run the project locally, follow these steps:

Clone the repository:
```
git clone <repository-url>
cd order-processing-system
```

Setup virtual environment (optional but recommended):

```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Install dependencies:

```
pip install -r requirements.txt
```

Run the application:

```
python run.py
```

Access the API:

The application will start running locally. Access the API endpoints defined in run.py (http://localhost:5000 by default) to interact with the Order Processing System.

Running tests

To execute tests, run the following command:
```
pytest
```
This command will run all the unit tests defined in the tests/ directory and its subdirectories.
