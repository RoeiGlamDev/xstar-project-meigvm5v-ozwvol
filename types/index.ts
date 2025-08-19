import { ProductCategory, User, Order } from './models';/

/
 * Represents a product in the GlamCS cosmetics line.
 */
export interface GlamCSProduct {
    id: string; // Unique identifier for the product/
    name: string; // Name of the product/
    description: string; // Description of the product/
    price: number; // Price of the product/
    category: ProductCategory; // Category to which the product belongs, e.g., skincare, makeup/
    images: string[]; // Array of image URLs for the product/
    inStock: boolean; // Availability status/
    rating?: number; // Optional product rating (out of 5)/
}

/
 * Represents a user of the GlamCS website.
 */
export interface GlamCSUser extends User {
    firstName: string; // User's first name/
    lastName: string; // User's last name/
    email: string; // User's email address/
    password: string; // User's password (hashed)/
    address?: string; // Optional shipping address/
    isAdmin: boolean; // Flag indicating if the user has admin privileges/
}

/
 * Represents an order placed by a user.
 */
export interface GlamCSOrder extends Order {
    userId: string; // ID of the user who placed the order/
    products: GlamCSProduct[]; // List of products in the order/
    totalAmount: number; // Total amount for the order/
    orderDate: Date; // Date when the order was placed/
    status: 'pending' | 'shipped' | 'delivered' | 'canceled'; // Current status of the order/
}

/
 * Represents a category of products in the GlamCS cosmetics line.
 */
export enum ProductCategory {
    SKINCARE = 'Skincare',
    MAKEUP = 'Makeup',
    FRAGRANCE = 'Fragrance',
    HAIRCARE = 'Haircare',
    TOOLS = 'Tools',
}

/
 * Represents a response for fetching products from GlamCS.
 */
export interface GlamCSProductResponse {
    products: GlamCSProduct[]; // List of products returned/
    totalProducts: number; // Total count of products available/
}

/
 * Exporting the GlamCS-specific types and interfaces for use in the application.
 */
export type { GlamCSProduct, GlamCSUser, GlamCSOrder, GlamCSProductResponse };