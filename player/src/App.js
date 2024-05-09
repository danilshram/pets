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
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/",
    element: <StartPage/>
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
