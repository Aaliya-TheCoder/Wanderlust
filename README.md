# 🌍 Wanderlust

A full-stack travel listing and booking platform where users can discover, create, and review travel destinations and stays around the world.

---

## 📸 Overview

Wanderlust is an Airbnb-inspired web application that allows users to:
- Browse travel listings from around the world
- Create and manage their own listings
- Leave reviews on places they've visited
- Sign up and log in securely

---

## ✨ Features

- 🏠 **Listings** — Create, edit, and delete travel stays
- ⭐ **Reviews** — Add and delete reviews on listings
- 🔐 **Authentication** — Secure signup & login with session management
- 🧭 **Responsive UI** — Clean and mobile-friendly design
- 🗺️ **Explore** — Browse all available listings on the platform
- ⚡ **Dynamic Frontend** — Interactive UI powered by React

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Templating | EJS |
| Frontend | React |
| Authentication | Passport.js / Express-Session |
| Styling | CSS / Bootstrap |
| Deployment | Render |

---

## 📁 Project Structure

```
Wanderlust/
├── controllers/
│   └── user.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   └── user.js
├── views/
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
├── public/
│   └── css/
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
SECRET=your_session_secret
PORT=8080
```

### 4. Run the App

```bash
node app.js
```

Or with nodemon (for development):

```bash
npm run dev
```

### 5. Open in Browser

```
http://localhost:8080
```

---

## 🌐 Deployment

This app is deployed on **Render**.

Live URL: (https://wanderlust-6oa9.onrender.com)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author
Aaliya Parveen 
GitHub: [Aaliya-TheCoder](https://github.com/Aaliya-TheCoder)

---

> Made with ❤️ and wanderlust 🌍
