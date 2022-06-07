import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    id: number,
    username : string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
}

const initialState: UserState = {
    id: 0,
    username : "",
    name: "",
    email: "",
    password: "",
    createdAt: new Date(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.id = action.payload.id
            state.username = action.payload.username
            state.name = action.payload.name
            state.password = action.payload.password
            state.email = action.payload.email
            state.createdAt = action.payload.createdAt

        }
    }
})
export const { setUser } = userSlice.actions
export default userSlice.reducer