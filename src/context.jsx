import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  products: [],
  orders: [],
  error: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_ORDERS':
      return { ...state, orders: action.payload, loading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case 'DELETE_ORDER':
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.example.com/products');
      dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const fetchOrders = async () => {
    try {
  const response = await axios.get('https://api.example.com/orders');
dispatch({ type: 'FETCH_ORDERS', payload: response.data });
} catch (error) {
dispatch({ type: 'SET_ERROR', payload: error.message });
}
};

const addProduct = async (product) => {
try {
const response = await axios.post('https://api.example.com/products', product);
dispatch({ type: 'ADD_PRODUCT', payload: response.data });
} catch (error) {
dispatch({ type: 'SET_ERROR', payload: error.message });
}
};

const addOrder = async (order) => {
try {
const response = await axios.post(`https://api.example.com/orders`, order);
dispatch({ type: 'ADD_ORDER', payload: response.data });
} catch (error) {
dispatch({ type: 'SET_ERROR', payload: error.message });
}
};

const deleteProduct = async (id) => {
try {
await axios.delete(`https://api.example.com/products/${id}`);
dispatch({ type: 'DELETE_PRODUCT', payload: id });
} catch (error) {
dispatch({ type: 'SET_ERROR', payload: error.message });
}
};

const deleteOrder = async (id) => {
try {
await axios.delete(`https://api.example.com/orders/${id}`);
dispatch({ type: 'DELETE_ORDER', payload: id });
} catch (error) {
dispatch({ type: 'SET_ERROR', payload: error.message });
}
};

return (
<AppContext.Provider
value={{
state,
fetchProducts,
fetchOrders,
addProduct,
addOrder,
deleteProduct,
deleteOrder,
}}
>
{children}
</AppContext.Provider>
);
};

export const useAppContext = () => useContext(AppContext);

//npm install react-router-dom@6.2.1
