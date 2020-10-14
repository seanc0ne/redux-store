import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

// create custom provider function to manage and update state
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
    cart: [],
    cartOpen: false
  });
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

// create the custom function
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
