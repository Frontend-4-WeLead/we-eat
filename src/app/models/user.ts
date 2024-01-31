
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    image_url: string;
    order_list: Order[];
    address_list: Address[];
}

export interface Order {
    id: number;
    store: string;
    order_date: string;
    product_list: Product[];
    total_price: number;

}

export interface Address {
    street: string;
    number: string;
    district: string;
    city: string;
}

export interface Product {
    quantity: string;
    name: string;
}