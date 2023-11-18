import { createAction } from "../../utils/firebase/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.type";

export const setCategoriesMap = (categoriesMap) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
}