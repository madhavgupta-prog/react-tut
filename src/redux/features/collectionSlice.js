import { createSlice } from '@reduxjs/toolkit'
import {toast} from "react-toastify"
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
            state.items = state.items.filter(item => item.id !== action.payload.id)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        addtoast:()=>{
            toast.success("Added to collection", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: false,
                draggable: false,
            })
        },
        removetoast:()=>{
            toast.info("Removed from collection", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: false,
                draggable: false,
            })
        }
    }
})
export const { addToCollection, removeFromCollection, clearCollection, addtoast, removetoast } = collectionSlice.actions
export default collectionSlice.reducer;