import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  logIn
} from 'App/Redux/Actions/user'

import { getUser } from 'App/Redux/Selectors/user'

import Component from './Home'

const selector = createStructuredSelector({
  user: getUser
})

const action = {
  onLogIn: logIn
};

export default connect(selector, action)(Component)