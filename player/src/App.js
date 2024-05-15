import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import LoginForm from "./components/LoginForm";
import StartPage from "./components/startPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage/>
  },
  {
    path: "/login",
    element: <LoginForm/>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
