import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE ={
  user:null,
//     user: {   
// _id: "650dc255e35fd389ffcb5a46",
// username :"Krishn",
// email :"krish123@gmail.com",
// profilePic:"https://i.pinimg.com/736x/fc/5b/a4/fc5ba45d019fe78ef38e5c9b5f4dc1df.jpg",
// coverPic :"https://i.pinimg.com/originals/32/62/1d/32621d59c0bddb9103af3ff03ea7647c.jpg",
// followers:[],
// isAdmin:false,
// desc:"hey this is my updated text",
// followings:[],
// },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE) 

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider 
    value={{
        user:state.user, 
        isFetching:state.isFetching, 
        error:state.error,
        dispatch,
        }}>

        {children}

    </AuthContext.Provider>
  )
}

export default AuthContext
