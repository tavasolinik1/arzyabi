import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { EvaluationProvider } from './context/EvaluationContext'
import { AppRouter } from './routes/AppRouter'

const router = createBrowserRouter(AppRouter)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <EvaluationProvider>
        <RouterProvider router={router} />
      </EvaluationProvider>
    </UserProvider>
  </React.StrictMode>
)
