import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect unauthenticated users to login with state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // If user's role is not allowed, redirect to their role's natural home portal
    if (user.role === 'admin') {
      return <Navigate to="/admin/complaints" replace />;
    }
    if (user.role === 'staff') {
      return <Navigate to="/staff/workbench" replace />;
    }
    return <Navigate to="/citizen/dashboard" replace />;
  }

  return children;
}
