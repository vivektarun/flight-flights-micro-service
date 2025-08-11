# Flight Booking Microservice Template

This is a Node.js microservice template designed for scalable backend development. It follows best practices for project structure, error handling, logging, and database interaction. You can reuse this template for future microservices by simply copying and customizing as needed.

---

## Table of Contents

- [Flight Booking Microservice Template](#flight-booking-microservice-template)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Setup Instructions](#setup-instructions)
  - [Environment Variables](#environment-variables)
  - [Sequelize Setup](#sequelize-setup)
  - [CRUD Repository Pattern](#crud-repository-pattern)
  - [Utils Overview](#utils-overview)
  - [Checking the Info Controller](#checking-the-info-controller)
  - [Logging](#logging)
  - [Reusing This Template](#reusing-this-template)

---

## Project Structure

```
src/
  config/         # Configuration files (dotenv, logger, sequelize)
  controllers/    # Route controllers
  middlewares/    # Request middlewares (validators, authenticators)
  models/         # Sequelize models
  repositories/   # CRUD repository pattern for DB access
  routes/         # API route definitions
  services/       # Business logic layer
  utils/          # Helpers, error classes, enums, responses
  migrations/     # Sequelize migrations
  seeders/        # Sequelize seeders
logs/             # Winston log files
.env              # Environment variables
```

---

## Setup Instructions

1. **Clone the repository** and install dependencies:
    ```sh
    npm install
    ```

2. **Add environment variables** in a `.env` file at the root:
    ```
    PORT=4000
    ```

3. **Initialize Sequelize** (inside `src`):
    ```sh
    npx sequelize init
    ```
    This creates `migrations/`, `seeders/`, and `config/config.json`.

4. **Configure your database** in `src/config/config.json`:
    - Set `username`, `password`, `database`, `host`, and `dialect` as per your DB.

5. **Run the server**:
    ```sh
    npm run dev
    ```

---

## Environment Variables

- All environment variables are loaded using `dotenv` in [`src/config/server-config.js`](src/config/server-config.js).
- Example `.env`:
    ```
    PORT=4000
    ```

---

## Sequelize Setup

- Sequelize is initialized in [`src/models/index.js`](src/models/index.js).
- Database configuration is read from [`src/config/config.json`](src/config/config.json).
- Models are auto-loaded from the `models/` directory.

---

## CRUD Repository Pattern

- The [`CrudRepository`](src/repositories/crud-repository.js) class abstracts common DB operations:
    - `create(data)`
    - `get(id)`
    - `getAll()`
    - `update(id, data)`
    - `destroy(id)`
- Extend this class for your models to avoid repetitive code.

---

## Utils Overview

- **Error Handling:** Custom error class [`AppError`](src/utils/errors/app-error.js).
- **Common Responses:** Standardized success and error responses in [`success-response`](src/utils/common/success-response.js) and [`error-response`](src/utils/common/error-response.js).
- **Enums:** Centralized enums like [`SEAT_TYPE`](src/utils/common/enums.js).
- **Helpers:** Utility functions (e.g., [`validateDateTime`](src/utils/helpers/dataTime-helper.js)).

---

## Checking the Info Controller

- The [`InfoController`](src/controllers/info-controller.js) provides a health check endpoint.
- To test:
    ```
    GET /api/v1/info
    ```
    Response:
    ```json
    {
      "sucess": true,
      "message": "Api is up",
      "error": {},
      "data": {}
    }
    ```

---

## Logging

- Winston logger is configured in [`src/config/logger-config.js`](src/config/logger-config.js).
- Logs are written to `logs/combined.log` and the console.

---

## Reusing This Template

- Copy the project structure and update models, controllers, and services as needed.
- The utils, repository pattern, and configuration files are ready for extension.

---

Feel free to customize further for your