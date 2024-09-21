import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_key, base_url, WeatherData } from "../../utils/constant";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherData,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherByCity.fulfilled, (_state, action) => action.payload)
    }
})

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (city: string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        };
    }
)

export const { } = weatherSlice.actions

export default weatherSlice.reducer