import {createContext, useState} from "react";

export const UserContext = createContext({});
//create context provider. As parent (App.js) it provides children the context variable globally
export function UserContextProvider({children}) {
  const [userInfo,setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{userInfo,setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
}
