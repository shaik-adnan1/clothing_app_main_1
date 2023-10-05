import { createContext, useState } from "react";

// Actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// ---------- CONTEXT PROVIDER -----------

export const UserProvider = ({children}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
