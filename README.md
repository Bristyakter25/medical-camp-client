# 🏥 CareSphere (Medical Camps Management System)  

A comprehensive web application designed to manage medical camps efficiently. Users can explore, register, and participate in medical camps, while organizers can create and manage camps seamlessly.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication & Authorization](#authentication--authorization)
- [Project Structure](#project-structure)
- [Dashboard Features](#dashboard-features)
  - [Organizer Dashboard](#organizer-dashboard)
  - [Participant Dashboard](#participant-dashboard)
- [Available Camps Page](#available-camps-page)
- [Camp Details Page](#camp-details-page)
- [Search and Sorting](#search-and-sorting)
- [Payment & Registration](#payment--registration)
- [Feedback and Ratings](#feedback-and-ratings)
- [Contributors](#contributors)
- [License](#license)

---

## 🎯 Features  

✅ **User Authentication & Authorization** (Login, Register, Social Login)  
✅ **Dynamic Navbar** (Logo, Links, Profile Dropdown)  
✅ **Home Page Sections:**  
   - **Hero Banner**: Displays success stories through a slider  
   - **Popular Camps**: Showcasing the top six camps with the highest participant count  
   - **See All Camps Button**: Redirects to the "Available Camps" page  
✅ **Camp Listing & Searching:**  
   - Display all available medical camps  
   - Filter and search for camps by keywords, date, etc.  
   - Sort by most registered, camp fees, and alphabetical order  
✅ **Camp Registration & Participant Modal:**  
   - Allows users to join a camp by filling out a modal form  
   - Stores participant details in the database  
   - Increases participant count dynamically  
✅ **Organizer Dashboard (Private Route):**  
   - Manage profile  
   - Add, update, and delete camps  
   - View and manage participant registrations  
✅ **Participant Dashboard (Private Route):**  
   - View registered camps  
   - Make payments via Stripe  
   - Provide feedback & ratings after successful payment  
✅ **Payment & Confirmation System:**  
   - Pay for camps securely using Stripe  
   - Track payment & confirmation status  
✅ **Feedback & Ratings System:**  
   - Participants can leave reviews  
   - Display feedback on the home page  
✅ **User-Friendly UI/UX & Responsive Layout**

---

## 🚀 Installation

1️⃣ Clone the repository  
```sh
git clone https://github.com/yourusername/medical-camps.git
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

## 🎮 Usage

- **Navbar:**  
  - Shows **Join Us** when the user is not logged in.  
  - Shows **Profile Picture & Dropdown Menu** (User Name, Dashboard, Logout) when logged in.

- **Available Camps Page:**  
  - Displays all camps with key details  
  - Provides filtering, sorting, and layout switching  

- **Camp Details Page:**  
  - Displays full camp details  
  - Allows users to join a camp  

- **Organizer Dashboard:**  
  - Manage camps (add, update, delete)  
  - Manage participant registrations  

- **Participant Dashboard:**  
  - View registered camps, payments, and analytics  
  - Leave feedback & ratings  

---

## 🔐 Authentication & Authorization  

- Users can sign up or log in via email/password or social login  
- React Hook Form is used for form validation  
- Authentication is required to access dashboards  

---

## 🏗 Project Structure

```
/medical-camps
 ├── src/
 │   ├── components/       # Reusable UI components
 │   ├── pages/            # Pages (Home, Camp Details, Dashboards)
 │   ├── hooks/            # Custom hooks
 │   ├── utils/            # Utility functions
 │   ├── services/         # API calls
 │   ├── routes/           # Protected and public routes
 │   ├── App.js            # Main app component
 │   ├── index.js          # Entry point
 │   ├── styles/           # Global styles
 │   └── assets/           # Static files
 ├── .env                  # Environment variables
 ├── package.json          # Dependencies
 ├── README.md             # Documentation
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

---

## 📌 Available Camps Page  

- Displays all added camps  
- Features search, sorting, and layout toggling  
- Includes a "Details" button linking to the camp details page  

---

## 📖 Camp Details Page  

- Showcases full camp information  
- Provides a "Join Camp" button that opens a registration modal  
- Stores participant details in the database  

---

## 🔍 Search and Sorting  

- **Search Bar:** Find camps by name, date, or healthcare professional  
- **Sorting Options:**  
  - Most Registered  
  - Camp Fees  
  - Alphabetical Order  

- **Layout Toggle:**  
  - Default: 3-column card layout  
  - Alternative: 2-column card layout  

---

## 💳 Payment & Registration  

- **Users can register for camps via a modal form**  
- **Stripe Payment Integration:**  
  - Displays "Pay" button if payment is pending  
  - After payment, updates status and stores transaction details  
- **Organizer confirms payment manually**  

---

## ⭐ Feedback and Ratings  

- **Participants can leave feedback after successful payment**  
- **Feedback is stored and displayed on the home page**  

---

## 👥 Contributors  

👤 **Your Name**  
📧 your.email@example.com  
🔗 [GitHub](https://github.com/yourusername)  

---

