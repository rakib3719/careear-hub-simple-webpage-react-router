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
import Applied from './components/applied/Applied';
import Error from './components/error/Error';

const router = createBrowserRouter([

{

path: '/',
element: <Root></Root>,
errorElement: <Error></Error>,
children: [
{

path: '/',
element: <Home></Home>

},
{

path:'/see-details/:id',
element: <JobDetails></JobDetails>,
loader: () => fetch('/jobs.json')


},

{

  path: '/applied',
  loader: ()=> fetch('/jobs.json'),
  element: <Applied></Applied>
}




]

}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
