import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Header from './components/Header.tsx'
import Login from './components/Login.tsx';
import Todo from './components/Todo.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/todo-list",
    element: <Todo/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
