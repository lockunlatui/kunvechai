import { homeLoad } from './action';

export function helloThunk () {
  return dispatch => {
    dispatch(homeLoad())
    console.log('Hello thunk')
  }
}

