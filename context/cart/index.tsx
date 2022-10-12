import { createContext, useEffect, useState } from 'react';

type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    brand: string;
    material: string;
    category: string;
    size: [];
    color: string;
};

type CartContextType = {
    cart: Product[];
    addItemToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
};

export const CartContext = createContext({} as CartContextType);

const addProductToCart = (cartItems: Product[], productToAdd: Product) => {
    const existingProduct = cartItems.find(
        (product: Product) => product._id === productToAdd._id
    );

    if (existingProduct) {
        return cartItems.map((product: Product) =>
            product._id === productToAdd._id
                ? {
                      ...product,
                      quantity:
                          product.quantity != productToAdd.quantity
                              ? product.quantity + productToAdd.quantity
                              : product.quantity + 1,
                  }
                : product
        );
    }

    return [...cartItems, { ...productToAdd, quantity: productToAdd.quantity }];
};

const removeProductFromCart = (
    cartItems: Product[],
    productToRemove: Product
) => {
    const existingProduct = cartItems.find(
        (product: Product) => product._id === productToRemove._id
    );

    if (existingProduct?.quantity === 1) {
        return cartItems.filter(
            (product: any) => product._id !== productToRemove._id
        );
    }

    return cartItems.map((product: Product) =>
        product._id === productToRemove._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
    );
};

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        setCart(JSON.parse(window.sessionStorage.getItem('cart') || '[]'));
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItemToCart = (product: Product) => {
        setCart(addProductToCart(cart, product));
    };

    const removeFromCart = (product: Product) => {
        cart.map((event: Product) => {
            if (event._id === product._id && event.quantity >= 1) {
                setCart(removeProductFromCart(cart, product));
            }
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
