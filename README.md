# 📋 DNV Healthcare Multi-Step Form

A responsive multi-step form application built for DNV Healthcare quote requests, featuring dynamic form handling, state management, and comprehensive validation.

## 📋 Overview

This project implements a 6-step form application designed for DNV Healthcare quote requests. The form features dynamic step rendering, real-time state management, and comprehensive validation to provide a seamless user experience for healthcare facility certification requests.

## ✨ Features

### 📝 Core Functionality
* **6-Step Form Flow**: DNV Quote Request → Facility Details → Leadership Contacts → Site Information → Services & Certifications → Review & Submit
* **Dynamic Step Rendering**: Conditional Step 2 based on Step 1 selections
* **Real-time State Management**: Form data persists across all steps
* **Comprehensive Review Page**: Collapsible sections showing all entered data

### 🚀 Advanced Features
* **Form Validation**: Required field validation with React Hook Form
* **Auto-fill Functionality**: "Same as Primary Contact" options with automatic field population
* **File Upload**: CSV/Excel upload with file management
* **Dynamic Contact Forms**: Service/certificate-specific contact forms that appear/disappear based on selections
* **Multi-select Components**: Standards and date selection with multiple tag display
* **Responsive Design**: Mobile and tablet optimized layouts

### 🎨 User Experience
* **Progress Tracking**: Visual progress bar with step indicators
* **Collapsible Sections**: Expandable review sections in Step 6
* **Navigation Controls**: Previous/Next navigation with save functionality
* **Error Handling**: Clear validation messages and error states

## 🛠️ Technologies Used

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=react-hook-form&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=flat&logo=css3&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-0081CB?style=flat&logo=material-ui&logoColor=white)

### State Management
![React Context](https://img.shields.io/badge/React%20Context-61DAFB?style=flat&logo=react&logoColor=black)

### Version Control
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

## 🚀 Getting Started

### ✅ Prerequisites
* Node.js (v16 or higher)
* npm or yarn

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Medlaunch-MultiStep-Form.git
cd dnv-multistep-form

# Install dependencies
npm install
```

### ▶️ Start Development Server

```bash
npm run dev
```

### 🌐 Open in Browser

```
http://localhost:5173
```

## 📁 Project Structure

```
dnv-multistep-form/
├── src/
│   ├── components/
│   │   ├── common/                 # Reusable components
│   │   │   ├── Header/            # Header
│   │   │   ├── ProgressBar/       # Step progress tracking
│   │   │   ├── Navigation/        # Form navigation buttons
│   │   │   └── SupportChat/       # Fixed support chat widget
│   │   ├── steps/                 # Step-specific components
│   │   │   ├── Step1/            # Organization & Primary Contact
│   │   │   ├── Step2/            # Facility Details (regular & "If Yes")
│   │   │   ├── Step3/            # Leadership Contacts
│   │   │   ├── Step4/            # Site Information & File Upload
│   │   │   ├── Step5/            # Services & Certifications
│   │   │   └── Step6/            # Review & Submit
│   │   └── MultiStepForm/         # Main form orchestrator
│   └── contexts/
│       └── FormContext.jsx        # Global form state management
├── public/                        # Static files
└── package.json                   # Dependencies
```

## 🧭 Navigation

### Form Steps
- `/step1` → DNV Quote Request & Organization Details
- `/step2` → Facility Details (conditional rendering)
- `/step3` → Leadership Contacts
- `/step4` → Site Information & File Upload
- `/step5` → Services & Certifications
- `/step6` → Review & Submit

## 💻 Key Functionalities

### 🔄 State Management
- React Context API for centralized form data management
- Form data persistence across all steps during session
- Dynamic form rendering based on user selections

### 🛡️ Form Validation & UX
- React Hook Form integration with custom validation rules
- Real-time error feedback and field validation
- Auto-fill functionality for repetitive contact information

## 📈 Future Enhancements

- Backend API integration for data persistence
- Real file upload and processing functionality
- Email verification system integration
- Advanced form analytics and user behavior tracking
- Multi-language support
- Advanced accessibility features

## ✍️ Author

Tanmay Chandan - [GitHub Profile](https://github.com/tanmayc31)

---

⭐ Star this repo if you found it useful!