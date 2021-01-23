import axios from 'axios';

export const setBaseUrl = () => {
    axios.defaults.baseURL = "https://localhost:5001/"
}
