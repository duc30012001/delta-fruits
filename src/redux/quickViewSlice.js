import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        product: {
            id: 0,
            name: "",
            type: "",
            status: "",
            price: 0,
            oldPrice: 0,
            images: [],
            path: "",
        },
        openQuickView: false,
        openModal: false,
    },
};

const quickView = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setQuickView: (state, action) => {
            state.value = { ...action.payload };
        },
    },
});

export const { setQuickView } = quickView.actions;
export default quickView.reducer;
