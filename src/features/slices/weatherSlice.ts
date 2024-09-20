import { createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../../utils/constant";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherData,
    reducers: {
        putWeatherInfo: (_state, action) => action.payload
    }
})

export const { putWeatherInfo } = weatherSlice.actions

export default weatherSlice.reducer