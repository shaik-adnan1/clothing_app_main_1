import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

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

    // signOutUser(); 

    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) =>{
        setCurrentUser(user);

        if(user) {
        createUserDocumentFromAuth(user);
        }

      } )
      return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
