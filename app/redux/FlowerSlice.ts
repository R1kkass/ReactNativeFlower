import { createSlice } from "@reduxjs/toolkit";
import { IApiFlower } from "../api/FlowerApi";

export interface IStoreFlower extends IApiFlower{
    isLoading: boolean
}

const initialState:IStoreFlower = {
    flower: [],
    isLoading: false
}

export const flowerSlice = createSlice({
    name: 'flower',
    initialState,
    reducers: {
        flowerFetching(state, actions) {
            state.flower=actions.payload
        },
        setLoading(state, actions) {
            state.isLoading=actions.payload
        }
    }
})

export default flowerSlice.reducer

export const {setLoading, flowerFetching} = flowerSlice.actions