import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getUser } from 'App/Redux/Selectors/user'

import Component from './Chat'

const selector = createStructuredSelector({
    user: getUser
})

const action = {}

export default connect(selector, action)(Component);