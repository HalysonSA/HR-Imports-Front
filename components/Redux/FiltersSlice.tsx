import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters } from './type';

const FiltersSlice = createSlice({
    name: 'filters',
    initialState: {
        colors: [] as string[],
        sizes: [] as string[],
        brands: [] as string[],
        categories: [] as string[],
        prices: [] as number[],
        materials: [] as string[],
    },
    reducers: {
        setFilters: (state, action: PayloadAction<Filters>) => {
            return action.payload;
        },
    },
});

export const { setFilters } = FiltersSlice.actions;
export default FiltersSlice.reducer;
