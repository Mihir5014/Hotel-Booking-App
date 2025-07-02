# 🧳 Travel Booking React App

A responsive and interactive multi-step travel booking web application built with React, Redux Toolkit, React Router v6, Formik, and more. Users can search for hotels, view room options, and complete a multi-step booking process.

## 🌟 Objective

Demonstrate key React concepts including:

- Routing with React Router v6
- State management using Redux Toolkit & Context API
- Multi-step forms with Formik & Yup
- Clean, responsive UI/UX
- Performance optimization and form validation

---

## 🌐 Features

### 🔍 Search
- Autocomplete city search input
- Dynamic route: `/search/:city`
- Query parameters to filter results: `/search/mumbai?bedType=double&guests=2`

### 🏨 Hotel Listings
- View available hotels for a selected city
- See room types and pricing details

### 📝 Multi-Step Booking Form
- Dynamic route: `/booking/:hotelId`
- Step 1: Personal Details
- Step 2: Room Selection
- Step 3: Payment Info (mocked)
- Custom stepper navigation
- Form validation with Formik + Yup

### 📦 State Management
- Redux Toolkit for managing booking data (selected city, hotel, room, guest info)
- Async thunk for fetching hotel data
- State persistence via `localStorage`
- Context API for theme switching (light/dark mode)

### 🖥 UI/UX Design
- Responsive design (mobile/tablet/desktop)
- Clean and modern UI
- Error boundaries & fallback UI
- 404 Not Found page

---

## 🚀 Tech Stack

- **React** (with Hooks)
- **Redux Toolkit** (with `createSlice`, `createAsyncThunk`)
- **React Router v6**
- **Context API** (for theme switching)
- **Formik** (form state)
- **Yup** (schema validation)
- **localStorage** (state persistence)
- **CSS Modules / Tailwind / Styled-Components** (customize per your choice)

---


