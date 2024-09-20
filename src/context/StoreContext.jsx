import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext();

const StoreContextProvider = ({children}) => {
   
    const [cartItem, setCartItem] = useState({});

    
    const AddtoCart =(itemId) => {
      if(!cartItem[itemId]){
          setCartItem((prev) => ({...prev, [itemId]: 1}))
      }else{
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId]+1}))
      }
    }

    const RemoveItem = (itemId) => {
      setCartItem((prev) => ({...prev, [itemId]: prev[itemId] -1 }))
    }
    
    console.log(cartItem);

    const data = {
       food_list,
       cartItem,
       AddtoCart,
       RemoveItem
    }

      return(
        <StoreContext.Provider value={data}>
            {children}
        </StoreContext.Provider>
      )
}

export default StoreContextProvider;