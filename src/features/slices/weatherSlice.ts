import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_key, base_url, WeatherData } from "../../utils/constant";
import { putMessage } from "./messageSlice";
import { AppDispatch } from "../../app/store";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherData,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherByCity.fulfilled, (_state, action) => action.payload)
    }
})

interface Props {
    dispatch: AppDispatch,
    city: string
}

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async ({ dispatch, city }: Props) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            dispatch(putMessage(''));
            return {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }
        } catch {
            dispatch(putMessage('Enter correct city name'))
        }
    }
)

export const {} = weatherSlice.actions

export default weatherSlice.reducer