# My Company Website

A modern, responsive company website built with React and Vite, featuring four main pages and smooth navigation.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Create the project using Vite:**
```bash
npm create vite@latest my-company -- --template react
cd my-company
```

2. **Install React Router:**
```bash
npm install react-router-dom
```

3. **Project Structure:**
Create the following folder structure in your `src` directory:
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── App.jsx
├── App.css
└── main.jsx
```

4. **Copy the component files:**
- Copy each component code from the artifacts into their respective files
- Replace the default `App.jsx` with the provided code
- Update `App.css` with the provided styles

5. **Run the development server:**
```bash
npm run dev
```

## 📁 File Structure

```
my-company/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Footer.jsx        # Footer component  
│   │   ├── Home.jsx          # Home page
│   │   ├── About.jsx         # About page
│   │   ├── Services.jsx      # Services page
│   │   └── Contact.jsx       # Contact page with form
│   ├── App.jsx               # Main app with routing
│   ├── App.css               # Global styles
│   └── main.jsx              # Entry point
├── package.json
└── README.md
```

## 🎯 Features

### 📱 Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Smooth hover effects and transitions

### 🧭 Navigation
- React Router for client-side routing
- Responsive navigation bar
- Active state styling

### 📄 Pages

#### 🏠 Home Page
- Hero section with call-to-action
- Feature cards showcasing company strengths
- Modern, engaging design

#### ℹ️ About Page
- Company story and mission
- Timeline of company milestones
- Values and vision sections

#### 🛠️ Services Page
- Six detailed service offerings
- Interactive service cards
- Call-to-action section

#### 📞 Contact Page
- Interactive contact form with state management
- Form validation and success messages
- Company contact information
- Business hours and location details

### 🎨 Styling
- Inline CSS with hover effects
- Consistent color scheme (#007bff primary)
- Card-based layouts with shadows
- Smooth transitions and animations

## 🔧 Technical Details

### Dependencies
- **React 18.2.0** - UI library
- **React Router DOM 6.8.1** - Client-side routing
- **Vite 4.1.0** - Build tool and dev server

### State Management
- Uses React's built-in `useState` hook
- Form state management in Contact component
- No external state management needed

### Routing
- Browser Router for clean URLs
- Route-based code splitting ready
- 404 handling can be easily added

## 🎯 Key React Concepts Demonstrated

1. **Component Architecture** - Modular, reusable components
2. **React Router** - Multi-page navigation
3. **State Management** - useState hook for form handling
4. **Event Handling** - Form submissions and user interactions
5. **Conditional Rendering** - Success messages and form states
6. **Props** - Data passing between components
7. **Inline Styling** - Dynamic styling with JavaScript

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The `dist` folder will contain the optimized production build.

---

**Repository:** alx-fe-reactjs  
**Directory:** my-company  
**Files:** Home.jsx, About.jsx, Services.jsx, Contact.jsx