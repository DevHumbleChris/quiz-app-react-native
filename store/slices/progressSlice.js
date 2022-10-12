import { createSlice } from '@reduxjs/toolkit'

export const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        index: 0,
        totalQuizes: null
    },
    reducers: {
        setTotalQuizes: (state, action) => {
            state.totalQuizes = action.payload
        }
    }
})

export const { setTotalQuizes } = progressSlice.actions
export default progressSlice.reducer