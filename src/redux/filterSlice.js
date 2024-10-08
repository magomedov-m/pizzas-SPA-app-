import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    },
}

const filterSlice = createSlice({
    name: 'fisdgavavsfvters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log('action setCategory', action)
            state.categoryId = action.payload;
        }
    }
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;