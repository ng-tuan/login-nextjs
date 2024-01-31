import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the initial state
interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  cartItems: CartItem[];
  total: number;
}

// Define the actions
type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'CALCULATE_TOTAL' };

// Create a context
const CartContext = createContext<
  { state: CartState; addToCart: (item: CartItem) => void; calculateTotal: () => void } | undefined
>(undefined);

// Define a reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'CALCULATE_TOTAL':
      const total = state.cartItems.reduce((acc, item) => acc + item.price, 0);
      return {
        ...state,
        total,
      };
    // Add other cases for handling different actions if needed
    default:
      return state;
  }
};

// Create a CartProvider component to wrap your app
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], total: 0 });

  // Create a function to dispatch actions
  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const calculateTotal = () => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
