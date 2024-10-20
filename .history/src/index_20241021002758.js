import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import App from './App';
import './index.css';

const queryClient = new QueryClient(); // Create a new QueryClient instance

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap your App with QueryClientProvider */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
