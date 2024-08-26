import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage.jsx"
import DashboardPage from './routes/dashboardpage/DashboardPage.jsx';
import ChatPage from './routes/chatpage/ChatPage.jsx'
import RootLayout from './layouts/rootlayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardlayout/DashboardLayout.jsx'
import SignInPage from './routes/signinpage/SignInPage.jsx';
import SignUpPage from './routes/signuppage/SignUpPage.jsx';



const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage/>,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage/>,
      },
      {
        element: <DashboardLayout/>,
        children:[
          { 
            path:"/dashboard" , 
            element: <DashboardPage/>
          },
          {
            path:"/dashboard/chat/:id" , 
            element: <ChatPage/>}
        ],
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
