import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

// combineReducers basically allows you to combine multiple reducers!

export const rootReducer = combineReducers({
    user: userReducer
}) // values => key:value => nameOfTheReducer: actual reducer function