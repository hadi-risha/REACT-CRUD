import { createStore } from 'redux';



import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';






const initialValue = {
                        isAdminAuth : false
                      }

const reducer = (prevState = initialValue, action) => {
  switch (action.type) {

    case 'isAuth' : 
      return {
        ...prevState,
        isAdminAuth: true
      }

    case 'logOut' : 
      return {
        ...prevState,
        isAdminAuth: false
      }
    
    default : 
      return prevState;
  }

}





const rootReducer = combineReducers({
  admin: reducer
});

const persistConfig = {
  key: 'root',
  storage,
};




const persistedReducer = persistReducer(persistConfig, rootReducer);

const adminStore = createStore(persistedReducer);
const persistor = persistStore(adminStore);



// const adminStore = createStore(reducer);
export default adminStore; 
export { persistor }



