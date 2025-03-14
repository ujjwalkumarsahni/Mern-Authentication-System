# Authentication API

This project provides a complete authentication system for user registration, login, email verification, and password reset using Node.js, Express, MongoDB, JWT, and Nodemailer.

## Features

- User registration with hashed passwords
- Login with JWT authentication
- Logout functionality with cookie clearing
- Email verification using OTP
- Password reset via OTP
- Middleware to check authentication status
- Secure cookie handling

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs (for password hashing)
- jsonwebtoken (for authentication)
- Nodemailer (for email notifications)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ujjwalkumarsahni/Mern-Authentication-System.git
   ```
2. Install dependencies:
   ```sh
   cd Mern-Authentication-System
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SENDER_EMAIL=your_email@example.com
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   ```
4. Start the server:
   ```sh
   npm run server
   ```

## API Endpoints

### 1. User Registration
- **Endpoint:** `/api/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully"
  }
  ```

### 2. User Login
- **Endpoint:** `/api/auth/login`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Login successful"
  }
  ```

### 3. Logout User
- **Endpoint:** `/api/auth/logout`
- **Method:** `POST`
- **Description:** Logs out the user by clearing cookies.
- **Response:**
  ```json
  {
    "success": true,
    "message": "Logged out"
  }
  ```

### 4. Send OTP for Email Verification
- **Endpoint:** `/api/auth/send-verify-otp`
- **Method:** `POST`
- **Description:** Sends OTP to user's email for verification.
- **Request Body:**
  ```json
  {
    "userId": "user_id_here"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "OTP sent successfully"
  }
  ```

### 5. Verify Email with OTP
- **Endpoint:** `/api/auth/verify-account`
- **Method:** `POST`
- **Description:** Verifies user email using OTP.
- **Request Body:**
  ```json
  {
    "userId": "user_id_here",
    "otp": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Account verified successfully"
  }
  ```

### 6. Check Authentication Status
- **Endpoint:** `/api/auth/is-auth`
- **Method:** `POST`
- **Description:** Checks if the user is authenticated.
- **Response:**
  ```json
  {
    "success": true
  }
  ```

### 7. Send OTP for Password Reset
- **Endpoint:** `/api/auth/send-reset-otp`
- **Method:** `POST`
- **Description:** Sends OTP to user's email for password reset.
- **Request Body:**
  ```json
  {
    "email": "john@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Reset OTP sent successfully"
  }
  ```

### 8. Reset Password Using OTP
- **Endpoint:** `/api/auth/reset-password`
- **Method:** `POST`
- **Description:** Resets user password using OTP.
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "otp": "123456",
    "newPassword": "newpassword123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Password reset successfully"
  }
  ```

### 9. Get User Data
- **Endpoint:** `/api/user/data`
- **Method:** `get`
- **Description:** Retrieves user data.
- **Request Body:**
  ```json
  {
    "userId": "user_id_here"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "userData": {
      "name": "John Doe",
      "isAccountVerified": true
    }
  }
  ```

## Security Measures
- **Password Hashing:** Uses `bcryptjs` to securely hash passwords.
- **JWT Authentication:** Ensures secure login sessions.
- **OTP Expiry:** OTPs expire after a set time to enhance security.
- **Secure Cookies:** Cookies are marked `httpOnly` and `secure` for security.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.


