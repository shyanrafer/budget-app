// for this commit, I removed routing on this file and instead put that onto the App.jsx file
// now i am running just the app through this file which keeps it "cleaner"
// I also removed tha alias from BrowserRouter as it wasn't necessary
// keeping overall app styling on this page via index.css
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 'as' signifies an alias
import './index.css';
import App from '../App/App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </StrictMode>
);
