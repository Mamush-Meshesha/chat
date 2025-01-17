import { createSlice } from "@reduxjs/toolkit";

interface User {
    [x: string]: any;
    name: string;
    email: string
    createdAt: string
}
export interface userState {
    user: User | null
    error: string
    loading: boolean
}

const initialState: userState = {
    user: null,
    error: "",
    loading: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUserRequest: (state) => {
            state.loading = true
        },
        fetchUserSuccess: (state,action)=>{
            state.loading = false
            state.user = action.payload
        },
        fetchUserFailure: (state, action) => {
            state.loading = false
            state.error =  action.payload
        }
    }
}) 

export const {
    fetchUserFailure,
    fetchUserRequest,
    fetchUserSuccess
} = userSlice.actions

export default userSlice.reducer