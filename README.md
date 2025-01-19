# Client

This is the frontend client for the personal portfolio project. It is built using React, TypeScript, and Vite.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/personal_portfolio.git
    cd personal_portfolio/client
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `client` directory and add the following variable:

    ```env
    VITE_BACKEND_URL="http://localhost:5000"
    ```

## Usage

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```plaintext
client/
├── public/                     # Public assets
├── src/                        # Source files
│   ├── api/                    # API configuration
│   ├── assets/                 # Static assets
│   ├── component/              # React components
│   ├── constants/              # Constants
│   ├── context/                # React context
│   ├── pages/                  # Pages
│   ├── Utils/                  # Utility functions
│   ├── App.css                 # Global styles
│   ├── App.tsx                 # Main App component
│   ├── index.css               # Global styles
│   ├── index.tsx               # Entry point
│   └── vite-env.d.ts           # Vite environment types
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── index.html                  # HTML template
├── package.json                # NPM scripts and dependencies
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Node
└── vite.config.ts              # Vite configuration
```

## Environment Variables

- `VITE_BACKEND_URL` - URL of the backend server

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build

## Dependencies

- `react` - JavaScript library for building user interfaces
- `react-dom` - Entry point of the DOM-related rendering paths
- `axios` - Promise-based HTTP client for the browser and Node.js
- `bootstrap` - Front-end framework for developing responsive websites
- `dotenv` - Loads environment variables from a `.env` file
- `vite` - Next generation frontend tooling

## License

This project is licensed under the MIT License.