import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

// combineReducers basically allows you to combine multiple reducers!

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer
}) // values => key:value => nameOfTheReducer: actual reducer function