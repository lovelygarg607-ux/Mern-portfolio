import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    profile: null,
 

   

}


const ProfileSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            state.profile = action.payload
        },


    



    }
})

export const { setProfileData } = ProfileSlice.actions;

export const Profilereducer = ProfileSlice.reducer