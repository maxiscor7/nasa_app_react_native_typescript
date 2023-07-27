const API_KEY = 'e6bqCbTNMq2cjFB9JEQb24FxUAIL2JWlFlqBdWTt';
const API_URL = 'https://api.nasa.gov/planetary/apod';

const getData = async  (urlParams?: string) => {
    try {
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${
                typeof urlParams !== 'undefined' && urlParams?.length > 0
                 ? urlParams
                  : ''}`)
        const data = await response.json()
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default getData