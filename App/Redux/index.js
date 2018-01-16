import configureStore from './createStore'
import rootReducer from './Reducers'

export default () => configureStore(rootReducer)