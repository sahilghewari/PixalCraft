import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';

const clerkPubKey = import.meta.env.VITE_CLERK_FRONTEND_API;

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);
