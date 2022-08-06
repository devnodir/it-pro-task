import { IComment } from './types';
import store from "../store";
const { dispatch } = store

// this function are useful for dispach store (instead of useDispatch)
export const setComments = (payload: IComment[]) => {
     dispatch({ type: "task1/setComments", payload })
}

export const setPage = (payload: number) => {
     dispatch({ type: "task1/setPage", payload })
}

export const setLoading = (payload: boolean) => {
     dispatch({ type: "task1/setLoading", payload })
}