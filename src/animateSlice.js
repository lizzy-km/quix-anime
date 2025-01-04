import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    animate:true
}

export  const animateSlice = createSlice({
    name: "animate",
    initialState,
    reducers: {
        setAnimate: (state, action) => {
            state.animate = action.payload;
        },
    },
})

export  const { setAnimate } = animateSlice.actions;
export default animateSlice.reducer;