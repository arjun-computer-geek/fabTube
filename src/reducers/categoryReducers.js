import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
  } from "constants/categoryConstants";
  
  export const categoryReducer = (state, action) => {
    switch (action.type) {
      case ALL_CATEGORY_REQUEST:
        return {
          loading: true,
          categories: [],
        };
      case ALL_CATEGORY_SUCCESS:
        return {
          loading: false,
          categories: action.payload,
        };
      case ALL_CATEGORY_FAIL:
        return {
          loading: true,
          error: action.payload,
          categories: [],
        };
      default:
        return state;
    }
  };
  