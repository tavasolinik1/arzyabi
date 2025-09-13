import type { RouteObject } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { LoginPage } from '../pages/Login'
import { ChangePasswordPage } from '../pages/ChangePassword'
import { EvaluationForm } from '../pages/EvaluationForm'
import { NGODashboard } from '../pages/NGODashboard'
import { AdminDashboard } from '../pages/AdminDashboard'
import { ProtectedRoute } from '../utils/guards'
 

export const AppRouter: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      { path: '/', element: <LoginPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/change-password', element: <ChangePasswordPage /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/dashboard', element: <NGODashboard /> },
      { path: '/evaluate', element: <EvaluationForm /> },
    ],
  },
  {
    element: (
      <ProtectedRoute roles={['Admin','Evaluator']}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/admin', element: <AdminDashboard /> },
    ],
  },
]

