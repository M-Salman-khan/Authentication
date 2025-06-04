# Node.js Authentication System

![Node.js](https://img.shields.io/badge/Node.js-v22.14.0-green.svg)
![Express](https://img.shields.io/badge/Express-v4.x-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.x-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A simple and secure authentication system built with Node.js, Express, and MongoDB. This project implements user registration, login functionality, and session management using cookies.

## Features

- 🔐 User Registration
- 🔑 User Login
- 🍪 Session Management with Cookies
- 📱 Responsive UI with EJS Templates
- 🛡️ Protected Routes
- 🔄 Redirect Logic for Authenticated Users

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Template Engine**: EJS
- **Session Management**: Custom implementation with Map
- **Other Tools**: UUID for Session IDs

## Project Structure

```
├── controllers/
│   └── user.js         # User authentication controllers
├── middleware/
│   └── auth.js         # Authentication middleware
├── models/
│   └── user.js         # User database model
├── routes/
│   ├── staticRoutes.js # Public routes
│   └── userRoute.js    # Protected user routes
├── service/
│   └── auth.js         # Authentication service
├── views/
│   ├── dashboard.ejs   # Dashboard view
│   ├── home.ejs        # Home page
│   ├── login.ejs       # Login form
│   └── signup.ejs      # Signup form
├── connect.js          # Database connection
└── index.js           # Application entry point
```

## Prerequisites

- Node.js (v22.14.0 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/M-Salman-khan/Authentication.git
   cd Authentication
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB locally:
   ```bash
   mongod
   ```

4. Run the application:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:8000`

## API Routes

### Public Routes
- `GET /` - Home page
- `GET /login` - Login page
- `GET /signup` - Signup page

### Authentication Routes
- `POST /user/signup` - Register new user
- `POST /user/login` - Login user

### Protected Routes
- `GET /user/dashboard` - User dashboard (requires authentication)

## Environment Variables

No environment variables are required for basic setup. The application uses default MongoDB connection URL: `mongodb://localhost:27017/auth`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Mohammad Salman Khan**
- GitHub: [@M-Salman-khan](https://github.com/M-Salman-khan)

## Acknowledgments

- Express.js documentation
- MongoDB documentation
- Node.js community

---
⭐ Star this repository if you find it helpful! 