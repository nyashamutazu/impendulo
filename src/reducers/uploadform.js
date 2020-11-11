import { RESTORE_STORY } from "../constants/actionTypes";

const initialState = {
  resetStory: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_STORY:
      console.log("Hello Welcome");
      return { ...state, resetStory: action.value };
    default:
      return state;
  }
};
