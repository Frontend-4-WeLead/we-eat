export interface Shop {
    id: number;
    name: string;
    address: string;
    rating: number;
    image_url: string;
    delivery_time: number;
    minimum_order_cost: number;
    opening_hour: number;
    closing_hour: number;
    products: Product[];
    shopCategories: ShopCategory[];
}

export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    image_url: string;
    ingredients: string[];
    allergenic: string;
    calories: number;
}

export interface ShopCategory {
    id: number;
    title: string;
}