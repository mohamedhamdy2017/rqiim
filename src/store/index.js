import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import reducers from '../reducers'
import { AsyncStorage } from 'react-native'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favList']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
export const  persistor = persistStore(store)


