import { createSlice } from '@reduxjs/toolkit'

export const progressSlice = createSlice({
    name: 'progress',
    initialState: {
        index: 0,
        totalQuizes: null,
        quizes: null,
        currentProgressPercentage: null,
        answerRemarks: '',
        score: 0,
        scorePercentage: null
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
            state.score = 0
        },
        setCurrentProgressPercentage: (state) => {
            const currentQuizIndex = state.index + 1
            state.currentProgressPercentage = `${Math.floor((currentQuizIndex * 100 ) / state.totalQuizes)}%`
        },
        setAnswerRemarks: (state, action) => {
            if (action.payload.correctIndex === action.payload.selectedIndex) {
                state.answerRemarks = 'Correct'
                state.score = state.score + 1
            } else if (action.payload.correctIndex !== action.payload.selectedIndex) {
                state.answerRemarks = 'Incorrect'
            }
        },
        calculateScorePercentage: (state, action) => {
            let percentageScore = Math.floor((state.score * 100) / state.totalQuizes)
            state.scorePercentage = `${percentageScore}%`
            console.log(state.score, state.scorePercentage)
        }
    }
})

export const { setTotalQuizes, setQuizes, incrementIndex, resetIndex, setCurrentProgressPercentage, setAnswerRemarks, calculateScorePercentage } = progressSlice.actions
export default progressSlice.reducer