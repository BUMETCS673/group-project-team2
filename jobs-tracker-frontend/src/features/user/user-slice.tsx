import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    token: string
}

const initialState: UserState = {
    token: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserToken(state, action: PayloadAction<UserState>) {
            state.token = action.payload.token
        }
    }
})
export const { setUserToken } = userSlice.actions
export default userSlice.reducer