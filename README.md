# AuthForge

AuthForge is a robust, lightweight authentication system designed to handle secure user access using **JSON Web Tokens (JWT)** and a **MySQL** backend. It provides a clean, professional foundation for developers looking to integrate secure login and registration flows into their applications without the overhead of heavy frameworks.

---

## 🏗️ Project Details
AuthForge focuses on the "security-first" principle. It manages user identities by issuing cryptographically signed tokens, ensuring that session management is stateless and scalable. 

### Key Features:
* **Secure Hashing:** Uses industry-standard algorithms (like Bcrypt) to salt and hash passwords.
* **JWT Implementation:** Stateless authentication via Bearer tokens.
* **Relational Storage:** Optimized MySQL schema for user data integrity.
* **Middleware Protection:** Pre-built logic to protect private routes from unauthorized access.

---

## 🛠️ Tech Stack
| Component | Technology |
| :--- | :--- |
| **Backend** | Node.js / Express |
| **Database** | MySQL |
| **Authentication** | JWT (JSON Web Tokens) |
| **Environment** | Dotenv (Security) |

---

## 📸 Screenshots
<img width="1916" height="1033" alt="image" src="https://github.com/user-attachments/assets/c47aea62-806f-4a07-9ba6-ed90a6c6f93c" />
<img width="1917" height="1025" alt="image" src="https://github.com/user-attachments/assets/b3e30661-c351-4074-b5d1-4222f195f542" />



---

## 🚀 Deployment
The production version of AuthForge is live and can be accessed at:
**https://authforge-five.vercel.app/**

---

## 💻 Getting Started (Cloning)

Follow these steps to get a local copy up and running.

### Prerequisites
* **Node.js** (v14 or higher)
* **React.js** 
* **MySQL Server** running locally or on a cloud instance.

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/authforge.git](https://github.com/your-username/authforge.git)
    cd authforge
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your credentials:
    ```env
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=yourpassword
    DB_NAME=authforge_db
    JWT_SECRET=your_super_secret_key
    ```

4.  **Set up the Database:**
    Ensure your MySQL service is running, then create the database:
    ```sql
    CREATE DATABASE authforge_db;
    ```

5.  **Run the application:**
    ```bash
    npm start
    ```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
