# Project Camp Backend

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![GitHub issues](https://img.shields.io/github/issues/your-username/project-camp-backend)
![GitHub stars](https://img.shields.io/github/stars/your-username/project-camp-backend)

A comprehensive RESTful API service designed to power a collaborative project management application. This backend enables teams to organize projects, manage tasks with subtasks, maintain project notes, and handle user authentication with a three-tier role-based access control system.

## ✨ Core Features

* **🔐 User Authentication:** Secure user registration, login, and session management using JSON Web Tokens (JWT) with a token refresh mechanism. Includes email verification and a secure password reset flow.
* **👤 Role-Based Access Control (RBAC):** Three-tier permission system (`Admin`, `Project Admin`, `Member`) to control access to different resources and actions.
* **📂 Project Management:** Full CRUD functionality for creating, viewing, updating, and deleting projects.
* **👥 Team Management:** Invite users to projects, manage their roles, and view team members.
* **✅ Task & Subtask Hierarchy:** Create tasks with assignees, track status (`Todo`, `In Progress`, `Done`), and break them down into smaller, manageable subtasks.
* **📎 File Attachments:** Support for uploading and attaching multiple files to tasks for better collaboration.
* **📝 Project Notes:** A dedicated space for project-level notes and documentation, with access controlled by user roles.
* **❤️ Health Check:** A simple endpoint to monitor the API's status and availability.

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose ODM
* **Authentication:** JSON Web Token (JWT), bcrypt.js
* **File Handling:** Multer
* **Validation:** [Add your validation library, e.g., Zod, Joi, or express-validator]
