export const BRAND_NAME = "GlamCS"
export const COLORS = {
    PRIMARY: "#FFA500", // Orange/
    SECONDARY: "#FFFFFF", // White/
}
export const CONFIG = {
    BASE_URL: "https://www.glamcs.com",/
    API_ENDPOINT: "https://api.glamcs.com/v1",/
    SUPPORT_EMAIL: "support@glamcs.com",
    PHONE_NUMBER: "+1-800-555-0199",
}
export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    imageUrl: string
    stock: number
}

export interface User {
    id: string
    name: string
    email: string
    password: string
}

export interface Order {
    orderId: string
    userId: string
    products: Product[]
    totalAmount: number
    orderDate: Date
}

/
 * Fetches the list of products available at GlamCS.
 * @returns {Promise<Product[]>} List of GlamCS products.
 */
export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(${CONFIG.API_ENDPOINT}/products);/
    return response.json()
}

/
 * Places an order for GlamCS products.
 * @param {Order} order The order details.
 * @returns {Promise<void>} Confirmation of order placement.
 */
export async function placeOrder(order: Order): Promise<void> {
    await fetch(${CONFIG.API_ENDPOINT}/orders, {/
        method: "POST",
        headers: {
            "Content-Type": "application/json",/
        },
        body: JSON.stringify(order),
    })
}