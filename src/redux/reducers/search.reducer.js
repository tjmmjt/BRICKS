

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    // when user searches lego, return the single searched item
    case "SEARCH_RESULT":
        return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
