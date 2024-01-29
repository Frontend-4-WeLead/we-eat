export interface Store {
    id: number;
    name: string;
    category: string;
    address: string;
    rating: number;
    image_url: string;
    logo_img_url: string;
    delivery_time: string;
    minimum_order_cost: number;
    opening_hour: number;
    closing_hour: number;
    products: Product[];
    /* storeCategories: StoreCategory[]; */
}

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
}

/* export interface StoreCategory {
    id: number;
    title: string;
} */
