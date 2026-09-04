import { createSlice } from '@reduxjs/toolkit'

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        items: JSON.parse(localStorage.getItem('collection')) || []
    },
    reducers: {
        addToCollection: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id)
            if (exists) return
            state.items.push(action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        removeFromCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCollection: (state) => {
            state.items = []
        }
    }
})