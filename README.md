# 🔐 Login UI Assessment — React + Firebase Authentication

A modern and responsive login interface built using React (Vite) and Material UI, implementing client-side validation and Google authentication via Firebase.
This project demonstrates clean UI design, proper component structuring, and real-world frontend development practices built as part of an Internship Technical & Creative Assessment.

🌐 **Live Demo:** https://login-ui-assessment.web.app

---

## ✨ Features

* Clean and professional UI using Material UI
* Fully responsive layout (desktop & mobile)
* Built with React (Vite) and component-based architecture
* Client-side form validation (email & password)
* Password visibility toggle for better UX
* Google Sign-In using Firebase Authentication
* Routing with React Router
* Reusable components and clean folder structure
* Deployed using Firebase Hosting

---

## 🛠 Tech Stack

* **Framework:** React (Vite)
* **Language:** JavaScript (ES6+)
* **UI Library:** Material UI (MUI)
* **Routing:** React Router DOM
* **Authentication:** Firebase Authentication (Google Provider)
* **Hosting:** Firebase Hosting

---

## 🧭 Application Flow

* User lands on the Login page
  
* User can:
    Enter email & password (UI validation only), or
    Sign in using Google Authentication
  
* After successful Google login:
    User is redirected to the Dashboard page
    Firebase access token is displayed (as required by the assessment)

ℹ️ Note:
The access token is displayed only for Google login, since email/password login is not connected to a backend service.

---

## 📂 Project Structure

          src/
           ├── components/
           │    ├── LoginForm.jsx
           │    ├── SocialLogin.jsx
           ├── pages/
           │    ├── LoginPage.jsx
           │    ├── Dashboard.jsx
           ├── firebase/
           │    └── config.js
           ├── theme/
           │    └── theme.js
           ├── App.jsx
           ├── main.jsx

This structure separates UI components, pages, Firebase configuration, and theme setup, following best practices.

---

## 🧑‍💻 How to Run Locally

    # Clone repository
    git clone https://github.com/samith-shashika/tuga-login.git
    
    # Navigate into project
    cd tuga-login
    
    # Install dependencies
    npm install
    
    # Start development server
    npm run dev

---

## 👤 Author

* Name: Samith Shashika
* Email: samithshashika.se@gmail.com


