export const selectCategories = state => {

  return state.categories.categories.reduce((acc, category) => {
    // DESTRUCTURING title and items from dacSnapshot.
    const { title, items } = category;
    
    // assigning title with items and returning new object
    acc[title.toLowerCase()] = items;
    console.log("selector fired")
    return acc;
  }, {});
};
// export const selectCurrentUser = state => state.user.currentUser;
