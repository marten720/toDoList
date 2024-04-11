# Request Management System

Welcome to the Request Management System project! This web application allows users to manage and track requests by submitting new requests and viewing active ones.

## Features

- Submit Request: Users can submit new requests by providing a description and deadline.
- View Active Requests: Users can view a list of active requests sorted by deadline. Requests with less than an hour remaining or past the deadline are highlighted in red.
- Mark as Completed: Users can mark a request as completed, removing it from the active requests list.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine
- Angular CLI installed globally `(npm install -g @angular/cli)`

### Installation

1. Clone the repository to your local machine:

   `git clone https://github.com/marten720/toDoList.git`

2. Navigate to the project directory:

   `cd request-management-system`

3. Install dependencies:

   `npm install`

### Usage

1. Start the development server:

   `ng serve`

2. Open your web browser and go to http://localhost:4200 to view the application.

### Deployment

To deploy the application for production, run the following command:

`ng build --prod`

This command will generate a production-ready build in the dist/ directory, which can be deployed to a web server.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature or fix: git checkout -b feature-name.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: `git push origin feature-name.`
Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project was created as part of a test job.
Special thanks to Angular for providing the framework.
