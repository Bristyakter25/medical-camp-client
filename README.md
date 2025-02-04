## 🏥 CareSphere (Medical Camps Management System)  

A comprehensive web application designed to manage medical camps efficiently. Users can explore, register, and participate in medical camps, while organizers can create and manage camps seamlessly.

## 🛠️ Technologies Used  

### 🌐 **Frontend (Client-Side)**  
✅ **React.js** – Frontend framework for building UI  
✅ **React Router** – Client-side routing for navigation  
✅ **React Hook Form** – Form validation and handling  
✅ **Tailwind CSS** – Styling framework for a modern UI  
✅ **Recharts** – Data visualization for participant analytics  
✅ **Stripe API** – Payment integration  

### 🔗 **Backend (Server-Side)**  
✅ **Node.js** – Backend runtime for JavaScript  
✅ **Express.js** – Web framework for handling API requests  
✅ **MongoDB** – NoSQL database for storing data  
✅ **Firebase Authentication** – User authentication (email/password & social login)  
✅ **JWT (JSON Web Tokens)** – Secure user authentication & authorization  
 
### ⚙️ **Other Tools & Libraries**  
✅ **Dotenv** – Environment variable management  
✅ **Nodemon** – Auto-restarting server during development  
✅ **Cors** – Cross-origin resource sharing for API requests  

## 🚀 Key Features  

### 🏠 **Home Page Features**  
- **Navbar:** Dynamic, with profile dropdown for logged-in users  
- **Hero Banner:** Slider showcasing success stories  
- **Popular Camps Section:** Displays top six camps with the highest participant count  
- **"See All Camps" Button:** Redirects to "Available Camps" page  

### 🏕 **Camps Management**  
- **Available Camps Page:** Lists all camps with search, sorting, and layout toggle  
- **Camp Details Page:** Shows full camp information with a "Join Camp" button  
- **Registration Modal:** Collects participant details and saves to the database  
- **Participant Count:** Automatically updates when a user joins a camp  

### 📊 **Organizer Dashboard (Private Route)**  
- **Profile Management:** Update name, image, and contact info  
- **Add A Camp:** Create new camps with validation  
- **Manage Camps:** Edit or delete existing camps  
- **Manage Registered Camps:** View participants, confirm payments, or cancel registrations  

### 👤 **Participant Dashboard (Private Route)**  
- **Profile Management:** Update user details  
- **Registered Camps:** View joined camps, payment status, and cancel option  
- **Analytics:** Visual charts for registered camps  
- **Payment History:** Track past and current payments  

### 🔍 **Search & Sorting**  
- **Search:** Find camps by name, date, or healthcare professional  
- **Sorting Options:** Most Registered, Camp Fees, Alphabetical Order  
- **Layout Toggle:** Switch between 3-column and 2-column view  

### 💳 **Payment & Confirmation**  
- **Stripe Payment Integration:** Secure transactions for camp registration  
- **Payment Status:** "Paid" or "Unpaid" with a pay button  
- **Confirmation System:** Organizer manually confirms payments  
- **Cancellation System:** Participants can cancel before payment; organizers can manage registrations  

## 📦 Dependencies  

Here are the key dependencies used in the **Medical Camps Management System**:

---

## 🌐 **Frontend (Client-Side) Dependencies**  

```json
"dependencies": {
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "react-hook-form": "^7.x.x",
  "formik": "^2.x.x",
  "tailwindcss": "^3.x.x",
  "axios": "^1.x.x",
  "recharts": "^2.x.x",
  "firebase": "^9.x.x",
  "jwt-decode": "^4.x.x",
  "react-icons": "^4.x.x",
  "react-toastify": "^9.x.x",
  "classnames": "^2.x.x",
  "react-spinners": "^0.x.x",
  "framer-motion": "^10.x.x"
}
```

---

## 🔗 **Backend (Server-Side) Dependencies**  

```json
"dependencies": {
  "express": "^4.x.x",
  "mongoose": "^7.x.x",
  "cors": "^2.x.x",
  "dotenv": "^16.x.x",
  "jsonwebtoken": "^9.x.x",
  "bcryptjs": "^2.x.x",
  "stripe": "^12.x.x",
  "cookie-parser": "^1.x.x",
  "multer": "^1.x.x",
  "firebase-admin": "^11.x.x"
}
```

---

## ⚙️ **Development Dependencies**  

```json
"devDependencies": {
  "nodemon": "^3.x.x",
  "eslint": "^8.x.x",
  "prettier": "^3.x.x"
}
```

---

### 🔹 **Additional Tools & Integrations**  
- **Firebase Authentication** – User authentication (email/password & social login)  
- **Stripe API** – Payment processing  

## 🚀 Installation

1️⃣ Clone the repository  
```sh
git clone https://github.com/Bristyakter25/medical-camp-client.git
cd medical-camps
```

2️⃣ Install dependencies  
```sh
npm install
```

3️⃣ Set up environment variables (`.env`)  
```sh
REACT_APP_API_URL=your_backend_url
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

4️⃣ Run the development server  
```sh
npm run dev
```

---

## 📊 Dashboard Features  

### 🏥 Organizer Dashboard  

- **Profile Management:** Update name, image, and contact info  
- **Add A Camp:** Create new camps with validation  
- **Manage Camps:** Edit or delete existing camps  
- **Manage Registered Camps:**  
  - View registered participants  
  - Confirm or cancel registrations  

### 👤 Participant Dashboard  

- **Profile Management:** Update user details  
- **Registered Camps:** View joined camps, payment status, and cancel option  
- **Analytics:** Charts displaying camp participation data  
- **Payment History:** Track past and current payments

## 🌐 Live Demo  
🔗 **[Live Demo]: (https://medical-camp-website.web.app/)** 

## 📂 GitHub Repositories  
- **Client (Frontend)**: (https://github.com/Bristyakter25/medical-camp-client) 
- **Server (Backend)**: (https://github.com/Bristyakter25/medical-camp-server)

---






