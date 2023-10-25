import { createStore } from "redux";

const initialState = { count: 0 };

// bộ xử lí trung tâm
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //   return { ...state, ...payload };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
