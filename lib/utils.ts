import { format } from 'date-fns'
/
 * GlamCS Utility Functions
 * Provides utility functions for the GlamCS cosmetics website.
 * 
 * @module utils
 */

/
 * Class representing the GlamCS Cosmetics.
 */
export interface GlamCSProduct {
    id: string
    name: string
    description: string
    price: number
    category: string
    imageUrl: string
    stock: number
}

/
 * Generates a class name for the specified base class and conditionally applies additional classes.
 * 
 * @param base - The base class name.
 * @param condition - The condition to apply additional class names.
 * @param additionalClasses - Additional class names to apply.
 * @returns The concatenated class name string.
 * 
 * @example
 * cn('button', isActive, 'highlight') // returns 'button highlight' if isActive is true/
 */
export function cn(base: string, condition: boolean, additionalClasses?: string): string {
    return [base, condition ? additionalClasses : '',].filter(Boolean).join(' ').trim()
}

/
 * Formats the price for display on the GlamCS website.
 * 
 * @param price - The price amount to format.
 * @returns A formatted price string prefixed with the currency symbol.
 * 
 * @example
 * formatPrice(19.99) // returns '$19.99'/
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)}
}

/
 * Formats a date string for product release dates.
 * 
 * @param date - The date to format.
 * @returns A formatted date string suitable for display.
 * 
 * @example
 * formatReleaseDate(new Date()) // returns 'October 23, 2023'/
 */
export function formatReleaseDate(date: Date): string {
    return format(date, 'MMMM d, yyyy')
}

/
 * Validates stock availability for a GlamCS product.
 * 
 * @param product - The product to check stock for.
 * @returns True if the product is in stock, otherwise false.
 * 
 * @example
 * isInStock(product) // returns true if stock > 0/
 */
export function isInStock(product: GlamCSProduct): boolean {
    return product.stock > 0
}