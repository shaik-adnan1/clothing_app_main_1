import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/firebase/reducer.utils";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

  const INITIAL_STATE = {
    currentUser: null,
  };
  

const userReducer = (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unknown action ${type} in user Reducer`);
  }
};

// ---------- CONTEXT PROVIDER -----------

export const UserProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [currentUser, setCurrentUser] = useState(null);
  

  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
  
  console.log(currentUser)
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  }

  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      setCurrentUser(user);

      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/**
 *
 * const userReducer = (state, action) => {
 *  return {
 *    currentUser:
 *
 * }
 *
 * }
 *
 *
 */
