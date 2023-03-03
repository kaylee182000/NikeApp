import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import createSagaMiddleware from '@redux-saga/core'
import counterReducer from '../features/counter/counterSlice'
import { docsApi } from '../services/docs'
import rootSaga from './rootSaga'

//Buoc tao middleware
const sagaMiddleware = createSagaMiddleware()

//add middleware vao redux toolkit
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, docsApi.middleware),
  reducer: {
    counter: counterReducer,
    [docsApi.reducerPath]: docsApi.reducer,
  },
  devTools: true,
})

//khoi chay saga
sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
