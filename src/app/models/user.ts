import { Product } from "./store";

export interface User {
    id: number;
    fisrtName: string;
    lastName: string;
    image_url: string;
    order_list: Order[];
    address_list: Address[];
}

export interface Order {
    id: number;
    store: string;
    order_date: string;
    product_list: Product[];
}

export interface Address {
    street: string;
    number: string;
    district: string;
    city: string;
}

// export interface Product {
//     quantity: string;
//     product: string;
//     total_price: number;
// }