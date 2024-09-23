import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext();

const StoreContextProvider = ({children}) => {
   
  const [cartItem, setCartItem] = useState({});

  const AddtoCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId] : (prev[itemId] || 0) + 1
    }))
  };


  
  const RemoveItem = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
  
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId]; 
      }

      return updatedCart;
    });
    
  };


  function CartTotalAmount(){
    let totalAmount = 0;

    for(const item in cartItem){
      if(cartItem[item] > 0){
        let product = food_list.find((prod) => prod._id === item);
        totalAmount += product.price * cartItem[item];
      }
    }
    return totalAmount;
  }
    

    const data = {
       food_list,
       cartItem,
       AddtoCart,
       RemoveItem,
       CartTotalAmount
    }

      return(
        <StoreContext.Provider value={data}>
            {children}
        </StoreContext.Provider>
      )
}

export default StoreContextProvider;