import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { fetchWeatherByCity } from '../features/slices/weatherSlice';

function Form() {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = async (e: FormEvent) => {
        e.preventDefault();
        await dispatch(fetchWeatherByCity({dispatch, city}));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={e => setCity(e.target.value)} type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form