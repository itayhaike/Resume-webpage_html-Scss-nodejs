# HTML & SCSS Compiler with Node.js

This project is a my resume web application that demonstrates the compilation of SCSS files to CSS using Node.js. The application serves an HTML file and applies styles from the compiled CSS file.

## Prerequisites

Before running this project, ensure that you have the following installed:

- Node.js (version 14 or later)
- npm (Node Package Manager)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:
git clone https://github.com/your-username/your-project.git
Copy code
2. Navigate to the project directory:
cd your-project
Copy code
3. Install the dependencies:
npm install
Copy code
4. Start the development server:
npm run watch-css
Copy code
This command will start a development server and watch for changes in your SCSS files. Whenever you save changes to an SCSS file, the CSS will be automatically compiled and updated in the browser.

5. Open your web browser and visit `http://localhost:8080` to see the application running.

## Project Structure

The project has the following structure:
your-project/
├── node_modules/
├── public/
│   ├── css/
│   │   └── styles.css  # Compiled CSS file
│   └── index.html      # HTML file
├── scss/
│   └── styles.scss     # Main SCSS file
├── package.json
├── package-lock.json
└── README.md
Copy code
- `node_modules/`: This directory contains all the installed Node.js dependencies.
- `public/`: This directory contains the HTML file and the compiled CSS file.
- `scss/`: This directory contains the SCSS source files.
- `package.json`: This file defines the project dependencies and scripts.

## Dependencies

The project uses the following dependencies:

- `node-sass`: A Node.js library for compiling SCSS to CSS.
- `nodemon` (optional): A utility that automatically restarts the Node.js process when file changes are detected.

## Scripts

The `package.json` file includes the following scripts:

- `watch-css`: This script compiles the SCSS files to CSS and watches for changes in the SCSS files. When a change is detected, it automatically recompiles the CSS.

# You can also run this code in docker
bash```
docker build -t resume-web .
docker run -p 8080:80 resume-web
```
Open your web browser and visit `http://localhost:8080` to see the application running.
## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

