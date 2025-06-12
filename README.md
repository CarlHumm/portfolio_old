# 🌐 Portfolio Project

An older single page portfolio built in React, PHP and MySQL. From a time when I was first getting to grips with React, state management libraries and build tools.

---

## 🚀 Key Features

- ⚛️ React-based SPA frontend
- 🐘 PHP backend using PDO
- 📦 `.env` support with `vlucas/phpdotenv`
- 🗃️ MySQL for data storage
- 📁 Dynamic project display with images
- 🛠️ Easily deployable with Apache

---

## 🛠 Requirements

- Node.js (v18+ recommended)
- Composer (for PHP dependencies)
- PHP 7.4+
- Apache/Nginx (or stack like XAMPP, LAMP, MAMP)
- MySQL or MariaDB

---

## 🔧 Local Development Setup

To run this project locally, ensure you have a working **PHP + Apache + MySQL** stack installed. You can use:

- [XAMPP](https://www.apachefriends.org/) (Windows/Linux/macOS)
- [MAMP](https://www.mamp.info/en/) (macOS/Windows)
- LAMP stack (Linux)
- Native Apache + PHP + MySQL installations

---

## 🧩 Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install React Dependencies

```bash
npm install
```

### 3. Install PHP Dependencies

```bash
cd api
composer install
cd ..
```

### 4. Configure Environment Variables

#### React `.env.production`

Create a `.env.production` file in the root:

```env
REACT_APP_API_URL=/api
REACT_APP_MEDIA_URL=/media
PUBLIC_URL=/
```

#### PHP API `.env`

Create a `.env` file at the root.

```env
DB_HOST=`YOUR_HOST`
DB_NAME=`YOUR_DB_NAME`
DB_USER=`YOUR_USERNAME`
DB_PASSWORD=`YOUR_PASSWORD`
```

---

## 🔌 Apache Configuration

Ensure Apache is configured to serve:

- React `build/` folder as the main site
- PHP `api/` folder as the backend

If using **XAMPP**, place the folder in `C:/xampp/htdocs/portfolio`.

Then create a Virtual Host (optional):

```apache
<VirtualHost *:80>
    ServerName portfolio.local
    DocumentRoot "C:/xampp/htdocs/portfolio/build"
    <Directory "C:/xampp/htdocs/portfolio/build">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Update your hosts file:

```
127.0.0.1 portfolio.local 
```

Restart Apache.

---

## ⚙️ Running Locally

- Start Apache & MySQL via XAMPP/LAMP/MAMP
- For development:

```bash
npm run dev
```

- For production:

```bash
npm run build
```

Then access via:

```
http://portfolio.local/
```

---

## 🧱 Database Setup

Create a MySQL database named `portfolio` and import the SQL file to populate project data. You can use phpMyAdmin or CLI.

---

## 🧠 Challenges Faced

- React build process removing `public/media` folder
- Static paths not resolving correctly in production
- Integration of PHP API with React in a single project
- Setting up Apache for clean routing and virtual host handling
- Converting CommonJS modules into ES Modules
- Conflicting and Deprecated dependencies (Critical Vunlrabilities)
-

---

## ✅ Solutions

- Reordered the build script to preserve `media/` after React's clean step
- Used `PUBLIC_URL=/` and proper environment variables
- Virtual host configured to serve React `build/` while keeping `/api` accessible
- PHP `.env` handled via `phpdotenv`

---


## 📬 Contact

Feel free to reach out with questions.
