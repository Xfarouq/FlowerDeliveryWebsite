# 🌸 Flower Delivery Website - Backend

This is the **backend API** for the Flower Delivery Web App built using **Node.js**, **Express**, and **MongoDB**. It supports full CRUD operations for flower products and handles image uploads using **Multer**.

---

## 🚀 Features

- Add, view, update, and delete flowers 💐
- Upload flower images 🖼️
- MongoDB integration with Mongoose 🗃️
- RESTful API routes using Express 🚦

---

## 📁 Project Structure

FlowerDeliveryWebsite/
├── backend/
│ ├── controllers/
│ │ └── flowerController.js
│ ├── models/
│ │ └── flowerModel.js
│ ├── routes/
│ │ └── flowerRoutes.js
│ ├── uploads/
│ ├── server.jsx
│ └── .env
├── frontend/ (if any)


## ⚙️ Technologies Used

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Multer** (for image uploads)
- **dotenv**
- **Postman** (for testing)

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/flower-delivery-backend.git
cd flower-delivery-backend/backend
2. Install dependencies

```bash
npm install
3. Create .env file
Create a .env file in the backend/ directory:
env

PORT=4000
MONGO_URI=your_mongodb_connection_string
4. Start the server
For development:

```bash 
npm run dev
For production:

```bash
npm start
Server runs at: http://localhost:4000

🛠️ API Endpoints
| Method | Endpoint           | Description                                      |
| ------ | ------------------ | ------------------------------------------------ |
| GET    | `/api/flowers`     | Get all flowers                                  |
| GET    | `/api/flowers/:id` | Get single flower                                |
| POST   | `/api/flowers`     | Create new flower (use Postman with `form-data`) |
| PATCH  | `/api/flowers/:id` | Update flower                                    |
| DELETE | `/api/flowers/:id` | Delete flower                                    |

```
📤 Uploading Images (with Postman)
Method: POST

URL: http://localhost:4000/api/flowers

Body: form-data

name → Flower name (text)

price → Flower price (number)

description → Flower description (text)

image → Choose a file (type: file)



👩‍💻 Author
Name: Farouq

Project: Flower Delivery Website

📄 License
This project is open-source and available under the MIT License.
