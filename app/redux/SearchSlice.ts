import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ""
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        sendSearch(state, actions) {
            state.search = actions.payload
        }
    }
})

export default searchSlice.reducer

export const {sendSearch} = searchSlice.actions