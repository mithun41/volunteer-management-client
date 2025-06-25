# 🌟 Volunteer Works

## 📌 Project Purpose

**Volunteer Works** is a volunteer management platform where users can either become a volunteer or post a request to search for one. It aims to streamline the process of connecting volunteers with people or organizations that need assistance. Built with React and Firebase, this project showcases key web development skills and covers authentication, routing, and full CRUD operations.

## 🌐 Live URL

🔗 [http://disagreeable-kitten.surge.sh/](http://disagreeable-kitten.surge.sh/)

## 🚀 Key Features

- 🔐 **Firebase Authentication** – Email/password-based registration and login.
- 📌 **Volunteer Post Management** – Users can:
  - Add new posts for volunteer needs.
  - View all existing volunteer requests.
  - Edit or delete their own posts.
- 👥 **Be a Volunteer Feature** – Authenticated users can apply to volunteer.
  - Applicant’s name and email are pre-filled.
  - A custom suggestion input is available.
  - On submission, the data is stored in a separate collection.
  - The volunteer count automatically decreases using `$inc` in MongoDB.
- ✅ **User-Specific Dashboard**:
  - Users can view all the posts they’ve created.
  - Shows a list of volunteer applications they've submitted.
- 🗓️ **Date Picker** – Users can select a date for their volunteer request using `react-datepicker`.
- 🔄 **Routing** – Client-side routing via `react-router`.
- 📱 **Responsive UI** – Fully responsive and styled with Tailwind CSS.
- 🍞 **Toast Notifications** – Success and error messages using `react-toastify`.
- ⚠️ **SweetAlert2 Dialogs** – Confirmation dialogs for deleting posts.

## 📦 NPM Packages Used

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.10",
  "axios": "^1.10.0",
  "firebase": "^11.9.1",
  "framer-motion": "^12.18.1",
  "motion": "^12.18.1",
  "react": "^19.1.0",
  "react-datepicker": "^8.4.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.2",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.22.0",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.10"
}
```
