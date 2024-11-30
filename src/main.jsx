import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import NavBar from './Pages/NavBar'
import Home from './Pages/Home/Home.jsx';
import './index.css';
import Login from './Pages/Login/Login.jsx';
import About from './Pages/Aboutus/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Performance from './Pages/Performance/Performance.jsx';
import Register from './Pages/Register/Register.jsx'
import School from './Pages/School/School.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },
  {
    path: "/performance",
    element: (
      <>
        <NavBar />
        <Performance />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <NavBar />
        <Register />
      </>
    ),
  },
  {
    path: "/school",
    element: (
      <>
        <NavBar />
        <School />
      </>
    ),
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  </StrictMode>,
)
