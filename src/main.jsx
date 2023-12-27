import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/_main.scss';

import Home from './routes/Home';
import Rules from './routes/Rules';
import ErrorPage from './routes/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './routes/About';
import TooBad from './routes/TooBad';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/regeln', element: <Rules /> },
  { path: '/ueber', element: <About /> },
  { path: '/pech', element: <TooBad /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
