# MERN Stack Hands-On Project

This project is a hands-on exercise for learning the MERN (MongoDB, Express, React, Node.js) stack. It demonstrates basic CRUD operations, user and task management, and integration with MongoDB Atlas.

## Features

- User management (create, read, update, delete)
- Task management with user assignment
- MongoDB Atlas integration
- Environment variable support via `.env`
- Seed script for populating initial data

## Folder Structure

```
wk1/
├── Models/
│   ├── User.js
│   ├── Task.js
│   └── Seed.js
├── db.js
├── .env
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MwaranoKelvin/mongoDB-MERN.git
    cd mongoDB-MERN/hands-on/wk1
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Copy `.env.example` to `.env`
    - Add your MongoDB Atlas URI to `.env`:
      ```
      MONGODBATLAS_URI=your_mongodb_atlas_connection_string
      ```

### Usage

- **Seed the database:**
    ```bash
    node Models/Seed.js
    ```
- **Run the application:**
    ```bash
    node app.js
    ```
    *(Replace `app.js` with your main entry file if different)*

## Scripts

- `Models/Seed.js`: Populates the database with sample users and tasks.

## Environment Variables

See `.env.example` for required variables.

## License

This project is for educational purposes.