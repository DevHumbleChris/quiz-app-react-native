import { createSlice } from '@reduxjs/toolkit'

export const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        index: 0,
        totalQuizes: null,
        quizes: null,
        currentProgressPercentage: null
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
        },
        setCurrentProgressPercentage: (state) => {
            const currentQuizIndex = state.index + 1
            state.currentProgressPercentage = `${Math.floor((currentQuizIndex * 100 ) / state.totalQuizes)}%`
        }
    }
})

export const { setTotalQuizes, setQuizes, incrementIndex, resetIndex, setCurrentProgressPercentage } = progressSlice.actions
export default progressSlice.reducer