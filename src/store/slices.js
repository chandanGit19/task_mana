import {createSlice} from "@reduxjs/toolkit"

const initialState  ={
    isLogin:false,
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null ,

} 


const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{

        setUser(state,value){
            state.user = value.payload;
        },
        setToken(state,value){
            state.token = value.payload
        },
        resetAuth:(state) =>{

            state.loading=false;
            state.signupData=null;
            state.token=null;
            localStorage.removeItem("token")                // Update to localstorage
          },

    }
})

export const {setToken,resetAuth,setUser,} = authSlice.actions;
export default authSlice.reducer;