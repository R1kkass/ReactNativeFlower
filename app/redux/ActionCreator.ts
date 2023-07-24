import { FlowerApi, IQuery } from "../api/FlowerApi";
import { userApi } from "../api/UserApi";
import { flowerSlice, setLoading } from "./FlowerSlice";
import { setToken } from "./TokenSlice";
import { AppDispatch } from "./store";

export const fetchFlowers = (params?: IQuery) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true))
        const e = await FlowerApi.getAll(params)
        dispatch(flowerSlice.actions.flowerFetching(e))
        dispatch(setLoading(false))
    }catch(e){
        console.log(e);
    }
}

export const fetchToken = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const e = await userApi.refresh(token)
        if(e?.access_token===undefined) {
            dispatch(setToken(""))
        }
    }catch(e){
        dispatch(setToken(""))
    }
} 