import { createSlice } from "@reduxjs/toolkit";
const isTokenPresentInCookies = () => {
    const token = document.cookie.split(';'.find(cookie => cookie.trim().startsWith('token=')));
    return !token;
}

const loadUserFromLocalStorage = () => {
    try {
        const serializeState = localStorage.getItem('user');
        if(serializeState == null) {
            return {user: JSON.parse(serializeState)}
        }
        return {user: JSON.parse(serializeState)}
    } catch (error) {
        return {user: null}
    }
}

const initialState = loadUserFromLocalStorage();
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user',JSON.stringify(state.user))
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user')
        }
    }
})

export const { setUser, logout } = authSlice.actions;;
export default authSlice.reducer;