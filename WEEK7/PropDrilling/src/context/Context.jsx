import { createContext } from "react";

export const DataContext = createContext({
    count:0,
    setCount:()=>{}
});
