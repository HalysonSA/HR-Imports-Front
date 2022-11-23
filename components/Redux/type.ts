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
};

export type UserInfo = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    accountType?: string | undefined;
    status?: string | undefined;
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
};
