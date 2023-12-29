import { createContext } from "react";
import { store } from "../data/store-redux";


type StoreContextType = any;

const StoreContext = createContext<StoreContextType>(store);

export default StoreContext;