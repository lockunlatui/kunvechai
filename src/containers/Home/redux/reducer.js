import { HOME_LOAD } from "./actionType";
const initialState = {
 isLoad: false
}

const Home = (state = initialState, action) => {
  switch(action.type) {
    case HOME_LOAD: 
      return {
        ...state,
        isLoad: true
      }
    default: return state
  }
}

export default Home;



