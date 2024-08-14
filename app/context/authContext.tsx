import React, { createContext, useContext, useState } from 'react';

// Define the shape of the auth state
interface AuthState {
  email: string;
  password: string;
  nama?: string;
  telepon?: string;
  alamat?: string;
}

// Create a context with an empty initial state
const AuthContext = createContext<any>(null);

// Create a provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState | null>(null);
  
  const logout = () => {
    setAuthState(null); // This clears the auth state, effectively logging out the user
  };
  return (
    <AuthContext.Provider value={{ authState, setAuthState, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
