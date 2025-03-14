# Client-Side Authentication App

This project is the **client-side** of a full-stack authentication system built using **React.js**. It includes user authentication features such as registration, login, email verification, and password reset.

## 🚀 Features
- User-friendly **registration & login** system
- **JWT-based authentication** for secure access
- Email verification with **OTP authentication**
- **Password reset** functionality using OTP
- Protected routes for authenticated users
- Responsive UI for an enhanced user experience

## 🛠️ Technologies Used
- React.js
- React Router
- Axios (for API requests)
- Context API (for state management)
- Tailwind CSS (for styling)

## 📸 Screenshots
![Home Page](../Mern-Authentication-System/client/src/assets/homePage.png)
![Login Page](../Mern-Authentication-System/client/src/assets/loginPage.png)
![Reset Password](../Mern-Authentication-System/client/src/assets/resetPage.png)

## 🔗 Live Demo
[Click here to view the live app](https://mern-auth-frontend-nb6e.onrender.com/)

## 📥 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ujjwalkumarsahni/Mern-Authentication-System.git
   ```
2. **Navigate to the project folder:**
   ```sh
   cd client
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   VITE_BACKEND_URL=https://your-backend-url.com
   ```
5. **Run the project:**
   ```sh
   npm run dev
   ```

## 🛠️ Project Structure
```
client-auth-app/
│-- public/
│-- src/
│   │-- components/
│   │-- pages/
│   │-- context/
│   │-- App.js
│   │-- index.js
│-- .env
│-- package.json
```

## 🔄 API Integration
The client app communicates with the backend server for authentication and user management. Ensure the **server is running** before testing client-side features.

## 💡 Contributing
Contributions are welcome! If you find a bug or have suggestions, feel free to open an issue or submit a pull request.


