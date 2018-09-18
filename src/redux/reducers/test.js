import { TEST_DATA } from '../actions/test';

const initState = {
 a:123
}

// reducer
export default function home (state = initState, action) {
  switch (action.type) {
    case TEST_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}

// action

export function changeTestData () {
  return {
    type: TEST_DATA,
    payload: {
      name: 'ethan',
      age: 18
    }
  }
}

export function getHomeInfo () {
  // 异步处理
  return dispatch => {
    // getHomePageInfo({}).then(res => {
    //   dispatch({type: HOME_DATA, payload: res.data.data})
    // })
  }
}