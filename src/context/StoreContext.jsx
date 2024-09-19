import { createContext } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext();

const StoreContextProvider = ({children}) => {
   
    

    const data = {
       food_list,
    }

      return(
        <StoreContext.Provider value={data}>
            {children}
        </StoreContext.Provider>
      )
}

export default StoreContextProvider;