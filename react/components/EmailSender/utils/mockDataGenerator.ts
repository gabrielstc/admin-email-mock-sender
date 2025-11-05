import faker from 'faker'
import { MockData } from '../types'

export const generateMockData = (): MockData => {
    return {
        customerName: faker.name.findName(),
        customerEmail: faker.internet.email(),
        storeName: 'VTEX Store',
        orderId: faker.random.alphaNumeric(10).toUpperCase(),
        orderValue: faker.commerce.price(100, 1000, 2, 'R$ '),
        trackingCode: faker.random.alphaNumeric(12).toUpperCase(),
        deliveryAddress: `${faker.address.streetAddress()}, ${faker.address.city()} - ${faker.address.state()}`,
        products: Array(3).fill(0).map(() => ({
            name: faker.commerce.productName(),
            price: faker.commerce.price(50, 300, 2, 'R$ '),
            quantity: faker.datatype.number({ min: 1, max: 3 }),
            image: faker.image.imageUrl(200, 200, 'product'),
        })),
    }
}