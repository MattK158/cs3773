// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (custId, firstName, lastName, email) => {
        // Create a user object with the provided data
        const userData = {
            custId,
            firstName,
            lastName,
            email
        };

        // Set the user object after a successful sign-in
        setUser(userData);
    };

    const signOut = () => {
        // Clear the user object on sign-out
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
