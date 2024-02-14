import HttpClient from "../http_client";

// Do not store the token like that. Use secure storage (local storage) and get the value from there!
// Check https://www.npmjs.com/package/react-secure-storage.
const token = '13|XzjSXGkN0ySKaCxYpfMQa5IIuh27xWDWEjp9fjdw';

class ShipioRepository {
    constructor() {
        this.httpClient = new HttpClient('https://fulfillment.shipio.bg/api/', token);
    }

    // Method to fetch orders
    async getOrders() {
        try {
            const ships = await this.httpClient.get('/orders');
            return ships;
        } catch (error) {
            throw error;
        }
    }

    // Method to create an order
    async createOrder(orderData) {
        try {
            const newShip = await this.httpClient.post('/orders/new', orderData);
            return newShip;
        } catch (error) {
            throw error;
        }
    }
}

export default ShipioRepository;
