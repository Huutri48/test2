import * as ActionType from "./constants";

let stateDefault = {
  data: null,
  error: null,
};
const reducerApi = (state = stateDefault, action) => {
  switch (action.type) {
    case ActionType.SUCCESS:
      state.data = action.payload;
      
      state.error = null;
      return { ...state };
    case ActionType.ERROR:
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default reducerApi;
