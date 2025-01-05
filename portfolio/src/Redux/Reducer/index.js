import { HANDLE_NAV } from "../Actions/actionNames";

const initialState = {
  nav: true,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_NAV:
      return {
        ...state,
        nav: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
