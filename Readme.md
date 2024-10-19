Simple Node.js Server
Description
A basic and responsive Node.js server application built using Express.js. This project is focused on handling CRUD operations on user data, serving static HTML and CSS files, and managing different HTTP requests. The structure follows a clean and professional approach to API creation, with added features like error handling, routing, and static file serving.

Features
Home Page: Serves a static homepage (index.html) that provides basic information.
CRUD Operations: Allows Create, Read, Update, and Delete operations for managing user data through API routes.
API Endpoints:
GET /users: Fetch a list of users.
POST /users: Create a new user.
PUT /users/:id: Update details of a user.
DELETE /users/:id: Remove a user from the database.
Responsive Design: Static files (HTML, CSS) are served for front-end interaction, ensuring proper display on various devices.
Error Handling: Implements basic error responses for invalid routes and HTTP methods.
Express Router: Organizes routes using Express Router for a more maintainable codebase.
Static Files: Serves static files (HTML, CSS, etc.) from the public/ directory.
Live Demo
Check out the live demo of this project:

GitHub Pages / Deployment Link: Live Demo
Requirements
To run this project locally, you’ll need to have:

Node.js: Version 14.x or newer
npm: Version 6.x or newer
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:

bash
Copy code
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
node server.js
Open your browser at http://localhost:3000 to access the application.

API Endpoints
GET /users: Retrieves all users in the system.
POST /users: Adds a new user using a JSON object sent in the request body.
PUT /users/:id: Updates a specific user's information based on the user ID.
DELETE /users/:id: Deletes a user by their ID.
Usage
Start the server: npm run dev (for development mode).
Build for production: You can add production build scripts if necessary.
Run in production: npm start (if you configure a production script).
Run linting: npm run lint (if ESLint is set up).
Author
Name: Farhat Sharefi
Email: your-email@example.com
GitHub: FarhatSharefi