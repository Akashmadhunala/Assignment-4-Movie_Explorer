import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import React Query dependencies
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the app with QueryClientProvider and pass the queryClient */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
