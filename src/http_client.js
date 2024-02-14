import axios from 'axios';

class HttpClient {
    constructor(baseURL, token) {
        this.instance = axios.create({
            baseURL: baseURL,
            headers: {
                'Authorization': token ? `Bearer ${token}` : null,
                'Accept': 'application/json',
            }
        });
    }

    // Method to make a GET request
    async get(url, config = {}) {
        try {
            const response = await this.instance.get(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Method to make a POST request
    async post(url, data = {}, config = {}) {
        try {
            const response = await this.instance.post(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Method to make a PUT request
    async put(url, data = {}, config = {}) {
        try {
            const response = await this.instance.put(url, data, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Method to make a DELETE request
    async delete(url, config = {}) {
        try {
            const response = await this.instance.delete(url, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default HttpClient;
