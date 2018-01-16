import { createSelector } from 'reselect'

const getState = state => state.user

export const getUser = createSelector(getState, user => user.user)