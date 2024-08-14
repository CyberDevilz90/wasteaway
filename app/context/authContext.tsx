import React, { createContext, useContext, useState } from 'react';

// Define the shape of the auth state
interface AuthState {
  email: string;
  password: string;
}

// Create a context with an empty initial state
const AuthContext = createContext<any>(null);

// Create a provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState | null>(null);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
