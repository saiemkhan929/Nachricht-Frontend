import constants from "./constants";

const authReducer = (state = {}, action) => {
  console.log("Dispatch called!", action);
  if (action.type === constants.ADD_NEW_USER) {
    return action.data;
  }

  return state;
};

export default authReducer;
