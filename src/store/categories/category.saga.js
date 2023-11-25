import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './caregories.action'

import { CATEGORIES_ACTION_TYPES } from './categories.type'


// export const fetchCategoriesAsync = () => {
//     return async (dispatch) => {
//         dispatch(fetchCategoriesStart())
//         try {
//             const categoriesArray = await getCategoriesAndDocuments("categories");
//             dispatch(fetchCategoriesSuccess(categoriesArray))
//         } catch (error) {
//             dispatch(fetchCategoriesFailed(error))
//         }
//     }
// }

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

// Generator fuction

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.fetchCategoriesStart, );
}


//  accumulator that holds all of the category's `sagas`
export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);


}