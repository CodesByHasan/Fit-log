# 🏋️ FitLog

**FitLog** is a modern and responsive workout library built with Next.js. It allows users to explore different workouts, view detailed workout information, create a personal workout plan, and save workouts for later.

The project focuses on providing a simple and organized way to discover workouts and manage a daily training plan.

---

## 🚀 Technologies Used

- **Next.js** — React framework with App Router
- **React** — Building reusable UI components
- **JavaScript (JSX)** — Application logic
- **Tailwind CSS** — Styling and responsive layouts
- **daisyUI** — UI components
- **React Toastify** — Toast notifications
- **REST API** — Fetching workout data

---

## ✨ Key Features

### 1. 🏋️ Workout Library
Browse a collection of workouts with useful information such as:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories
- Rating

### 2. 📋 Workout Details
View detailed information about each workout, including:

- Workout description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 3. 📝 Personal Workout Plan
Add workouts to **Today's Plan** and manage them from the My Plan page.

Users can:

- Add workouts
- Remove workouts
- Mark workouts as completed
- View total exercises
- View total workout minutes
- View total calories

### 4. 🔖 Save Workouts
Save workouts for later and access them from the **Saved** section of My Plan.

Duplicate saved workouts are prevented, and users receive toast notifications for their actions.

### 5. 📱 Responsive Design
FitLog is designed to work across:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

The interface uses Tailwind CSS and daisyUI to provide a clean and responsive experience.

---

## 🌐 API

Workout data is fetched from:

`https://api.abcz.workers.dev/api/fitlog`

Workout details are fetched using:

`https://api.abcz.workers.dev/api/fitlog/:id`

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── workouts/
│   │   └── [id]/
│   ├── my-plan/
│   ├── globals.css
│   ├── layout.jsx
│   ├── loading.jsx
│   └── page.jsx
│
├── components/
│   ├── workoutDetails/
│   ├── homepage/
│   └── shared/
│
└── context/
    └── FitLogContext.jsx
