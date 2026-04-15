# 📝 Enquiry Capturing System

A modern, responsive web application designed to capture user enquiries and save them directly to a Google Sheet. Built with **React** for the frontend and **Node.js (Express)** for the backend.

---

## ✨ Features

- 🏢 **Professional UI**: Clean and minimal enquiry form.
- 🚀 **Real-time Submission**: Instant validation and submission of user data.
- 📊 **Google Sheets Integration**: Automatically appends enquiry data to a specified Google Sheet.
- 📱 **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.
- ⏳ **Loading Animations**: Visual feedback during form submission.
- ✅ **Success Alerts**: Clear confirmation after successful submission.

---

## 📸 Screenshots

| Empty Form | Filling Data |
| :---: | :---: |
| ![Form Empty](./screenshots/form-empty.png) | ![Form Filled](./screenshots/form-filled.png) |

| Loading State | Success Message |
| :---: | :---: |
| ![Form Loading](./screenshots/form-loading.png) | ![Success Alert](./screenshots/form-success.png) |

> **Note:** Please save the screenshots from the chat into the `./screenshots` folder using the filenames mentioned above.

---

## 📊 Results: Google Sheets

This is the result in Google Sheets after successfully capturing an enquiry:

![Google Sheet Result](./screenshots/google-sheet.png)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 📋 Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- A **Google Cloud Project** with Google Sheets API enabled.

### 🛠️ Backend Setup

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `server` folder (or copy from `.env.example`):
   ```env
   PORT=5000
   GOOGLE_SHEET_ID="your_google_sheet_id"
   GOOGLE_SHEET_CLIENT_EMAIL="your_service_account_email"
   GOOGLE_SHEET_PRIVATE_KEY="your_private_key"
   ```

4. **Run the Backend Server:**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000`.

### 💻 Frontend Setup

1. **Navigate to the project root:**
   ```bash
   cd ..
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or copy from `.env.example`):
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Run the Frontend:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 🔐 How to Get Google Sheets Credentials

To connect the application to your Google Sheet, you need to set up a Service Account.

1.  **Create a Google Cloud Project:**
    - Go to the [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project.

2.  **Enable Google Sheets API:**
    - In the sidebar, go to **APIs & Services > Library**.
    - Search for **"Google Sheets API"** and click **Enable**.

3.  **Create a Service Account:**
    - Go to **APIs & Services > Credentials**.
    - Click **Create Credentials > Service Account**.
    - Give it a name and click **Create and Continue**.
    - (Optional) Assign the "Editor" role.
    - Click **Done**.

4.  **Generate a JSON Key:**
    - Find your new Service Account in the list and click the **pencil icon (Edit)**.
    - Go to the **Keys** tab.
    - Click **Add Key > Create new key**.
    - Select **JSON** and click **Create**. This will download a `.json` file to your computer.

5.  **Get Credentials from JSON:**
    - Open the downloaded JSON file.
    - Copy the `client_email` and put it in `GOOGLE_SHEET_CLIENT_EMAIL`.
    - Copy the `private_key` and put it in `GOOGLE_SHEET_PRIVATE_KEY`. (Make sure to copy the entire string starting from `-----BEGIN PRIVATE KEY-----` and ending with `-----END PRIVATE KEY-----`).
    - Copy the spreadsheet ID from your Google Sheet URL (the long string between `/d/` and `/edit`) and put it in `GOOGLE_SHEET_ID`.

6.  **Share the Google Sheet:**
    - Open your Google Sheet.
    - Click the **Share** button.
    - Paste the `client_email` of your Service Account and give it **Editor** access. **(Crucial Step!)**

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Node.js, Express, Google APIs (googleapis)
- **Database**: Google Sheets

---

## 📄 License

This project is licensed under the ISC License.
