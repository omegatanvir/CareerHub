import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Root/Root.jsx';
import Home from './components/Home/Home';
import JobApplied from './components/JobApplied/JobApplied';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JovDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <JobApplied></JobApplied>,
      },
      {
        path: "/job/:id",
        element: <JovDetails></JovDetails>,
        loader: () => fetch('../jobs.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
