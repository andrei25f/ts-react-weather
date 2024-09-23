import { createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../../utils/constant";
import { fetchWeather } from "../api/weatherApi";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherData,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
    }
})

export default weatherSlice.reducer