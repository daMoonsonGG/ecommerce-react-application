import //  SET_SHOP_CATEGORIES
"../actions/types";

const INITIAL_STATE = {
  categories: [],
  selectedCategoryID: 0,
  productsSelected: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case SET_SHOP_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: action.payload,
    //   };

    default:
      return state;
  }
}
