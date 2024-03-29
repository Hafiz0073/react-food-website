import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
