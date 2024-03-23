import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './components/home/Home';
import JobDetails from './components/job-details/JobDetails';

const router = createBrowserRouter([

{

path: '/',
element: <Root></Root>,
children: [
{

path: '/',
element: <Home></Home>

},
{

path:'/see-details/:id',
element: <JobDetails></JobDetails>,
loader: () => fetch('/jobs.json')


}




]

}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
