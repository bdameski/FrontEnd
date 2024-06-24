import "./App.css"
import * as React from "react";
import HomePage from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  } , 
  {
    path: "/register/",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/login/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }, 
 
 
]);




function App() {
  return (
    <div className="App" >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


/*
Register
Add heading on Register
Add text on Register page "Already have an account? Log In here"
Change the button color

Login
Add headinig on Login
Add text on Login page "Dont have an account? Register here"
Change the button color


Home
Add margin from left and right
Add heading "Reports"

*/