// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import reducers from '../reducers'
// import { persistStore, persistReducer } from 'redux-persist'
// import { AsyncStorage } from 'react-native'


// const config = {
//     key: 'root',
//     storage :AsyncStorage,
//   };
//   const reducer = persistReducer(config, reducers);
//   const store = createStore(
//         reducer,
//          {},
//          compose(
//              applyMiddleware(thunk),
//          )
//      );


// const persistor = persistStore(store);

// export  default { store, persistor };

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


