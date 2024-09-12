export const base_url: string = 'https://api.openweathermap.org/data/2.5/weather';
export const api_key: string = 'e2f671cfcd1d6065af80b8e4952b0eac';

export type WeatherData = {
    city?: string,
    country?: string,
    temp?: number,
    pressure?: number,
    sunset?: number
}