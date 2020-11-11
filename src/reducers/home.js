import { UPDATE_STORY, RESTORE_STORY } from "../constants/actionTypes";

const initialState = {
  story: "Once upon a time there was a big bad wolf"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STORY:
      return { ...state, story: action.story };
    case RESTORE_STORY:
      return { ...state, story: "Once upon a time there was a big bad wolf" };
    default:
      return state;
  }
};
