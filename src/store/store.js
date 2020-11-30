import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import MusicReducer from './reducers/musicReducer';
import thunk from 'redux-thunk'

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action)
            console.log('[Middleware]', store.getState())
            return result
           
        }
    }
  }

  

const rootReducers = combineReducers({
    musicReducer : MusicReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger,thunk)) )

export default store;


