import React, { useState } from  'react';


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email,password) => {}

});
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onLoginHandler = (email, password) => {
      setIsLoggedIn(true)
  
    }
    const onLogoutHandler = () => {
      setIsLoggedIn(false)
  
    }
    return (
       <AuthContext.Provider value={
        {
          isLoggedIn: isLoggedIn,
          onLogout: onLogoutHandler,
          onLogin: onLoginHandler
        }
      } >
      {props.children}
       </AuthContext.Provider>
    );
    

}

export default AuthContext;