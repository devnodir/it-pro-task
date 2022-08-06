import { createSlice } from "@reduxjs/toolkit";
import { IComment } from './../../utils';

interface IState {
     comments: IComment[],
     page: number,
     isLoading: boolean
}

// initial values of reducer
const initialState: IState = {
     comments: [],
     page: 1,
     isLoading: false
};

const task1Slice = createSlice({
     name: "task1",
     initialState: initialState,
     reducers: {
          setComments: (state: IState, { payload }) => {
               state.comments = payload
          },
          setPage: (state: IState, { payload }) => {
               state.page = payload
          },
          setLoading: (state: IState, { payload }) => {
               state.isLoading = payload
          },
     }
});

export default task1Slice;