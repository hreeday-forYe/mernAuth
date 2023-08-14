// Two slices where we can keep certain states and the reducers that take in actions

// authslice--deals with the local stuffs takes the user data that we get back from our api and 
// put it in the localstorage and in our authStat so that we will have name email and id not token cause it will be in the http only cookie and logout where it will destroy it from the local storage

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  userInfo:localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,

}

// creating the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    // This is the object with reducer function in this particular slice 
    // setCredientals--sets our User info to local storage
    // logOut-- take our infor out of local storage
    setCredentials: (state, action) =>{
      state.userInfo = action.payload; // The user data 
      localStorage.setItem('userInfo', JSON.stringify(action.payload));

    },
    // This is more like the reducer which removes userinfo from the localstorage more like clearCredentials exact opposite to setCredentials where the action is the user passed and we keep the state.userInfo as the action.payload which is the user data and keep it in the localstorage.setItem()



    logout: (state, action) => {
      state.userInfo = null,
      localStorage.removeItem("userInfo");
    }
  }
})

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer