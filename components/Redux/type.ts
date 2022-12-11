export type ProductInfo = {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    material: string;
    stock: number | 0;
    promotional: boolean;
    brand: string;
    size: string[];
    color: string[];
    quantity?: number;
};

export type Order = {
    _id: string;
    status: string;
    user: {
        street_name: string;
        street_number: number;
        city: string;
        complement: string;
        cpf: string;
        email: string;
        federal_unit: string;
        first_name: string;
        last_name: string;
        neighborhood: string;
        telephone: string;
        zip_code: string;
    };
    cart: ProductInfo[];
    payment: {
        payment_status: string;
        payment_method: string;
        payment_amount: number;
    };

    createdAt: string;
};

export type UserInfo = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    accountType?: string | undefined;
    status?: string | undefined;
};

export type Filters = {
    colors: string[];
    sizes: string[];
    brands: string[];
    categories: string[];
    materials: string[];
    prices: number[];
};

export type ShopFiltersInfo = {
    _orderBy: string;
};

export type ReduxState = {
    products: ProductInfo[];
    user: UserInfo;
    isCartOpen: Boolean;
    isLoading: Boolean;
    shopFilters: ShopFiltersInfo;
    filters: Filters;
    orders: Order[];
};
