import { createSlice } from '@reduxjs/toolkit'

export const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        index: 0,
        totalQuizes: null,
        quizes: null
    },
    reducers: {
        setTotalQuizes: (state, action) => {
            state.totalQuizes = action.payload
        },
        setQuizes: (state, action) => {
            state.quizes = action.payload
        },
        incrementIndex: (state, action) => {
            state.index = state.index + 1
        },
        resetIndex: (state) => {
            state.index = 0
        }
    }
})

export const { setTotalQuizes, setQuizes, incrementIndex, resetIndex } = progressSlice.actions
export default progressSlice.reducer