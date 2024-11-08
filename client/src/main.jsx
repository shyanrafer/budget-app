import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// I needed to create a route for the page - with this, I should be able to load any page from this main.jsx file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 'as' signifies an alias
import './index.css';
import App from './App';
import TestPage from './pages/TestPage'; // Import TestPage here. Need it as it is a 'component' and can be loaded so long as it is routed to. Wondering about the use of components in other instances now. Seems a bit different compared to the final project from coding class.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/TestPage" element={<TestPage />} />
      </Routes>
    </Router>
  </StrictMode>
);


// could routing of the components be done via the backend?
