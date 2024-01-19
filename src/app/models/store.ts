export interface Store {
    id: number;
    name: string;
    category: string;
    address: string;
    rating: number;
    image_url: string;
    delivery_time: number;
    minimum_order_cost: number;
    opening_hour: number;
    closing_hour: number;
    products: Product[];
    /* storeCategories: StoreCategory[]; */
}

export interface Product {
    id: number;
    name: string;
    /* title: string; */
    category: string;
    price: number;
   /*  image_url: string;
    ingredients: string[];
    allergenic: string;
    calories: number;*/
}

/* export interface StoreCategory {
    id: number;
    title: string;
} */
