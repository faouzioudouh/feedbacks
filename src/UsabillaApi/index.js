import axios from 'axios';
import config from '../config';

class UsabillaApi {
    constructor(config) {
        this.config = config;
    }

    /**
     * Get all the feedbacks.
     * @param {Feedbacks[]} 
     */
    getFeedbacks() {
        const { BASE_URL, FEEDBACKS_ENDPOINT } = this.config;
        return axios.get(`${BASE_URL}${FEEDBACKS_ENDPOINT}`);
    }
}

export default new UsabillaApi(config.__API_CONFIG__);