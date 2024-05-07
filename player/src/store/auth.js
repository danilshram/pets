import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {token: null, payload: null},
    reducers: {
        login(state, {payload:token}){
            const payload = jwtDecode(token)
            if (payload){
                state.payload = payload
                state.token   = token
            }
        },
        logout(state){
            state.payload = null
            state.token   = null
        }, 
        setAvatar(state, action){
            const{avatar} = action.payload
            state.payload.avatar = avatar
        },
        setNick(state, action){
            const {nick} = action.payload
            state.payload.nick = nick
        }
    }
})

export default authSlice;