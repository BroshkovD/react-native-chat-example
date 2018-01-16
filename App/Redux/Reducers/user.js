import { createReducer } from 'App/Helpers/redux'

import { LOG_IN } from '../Actions/user'

const initialState = {
  user: null
}

const handlers = {
  [LOG_IN]: (state, { payload }) => {
    return({
      ...state,
      user: payload
    })
  }
}

export default createReducer(initialState, handlers);