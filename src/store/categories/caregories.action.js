import { createAction } from "../../utils/firebase/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
}

const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
}

export const fetchCategoriesFailed = (error) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
}
