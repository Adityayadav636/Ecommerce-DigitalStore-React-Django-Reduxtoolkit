import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
  } from 'react-redux';
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import thunk from "redux-thunk"
  
  
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
});
      
export const useSelector = useReduxSelector;
  
export const useDispatch = () => useReduxDispatch();

export default store
  