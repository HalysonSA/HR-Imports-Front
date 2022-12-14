import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: string[];
    brand: string;
    material: string;
    category: string;
    size: string[];
    color: string[];
};

type CartContextType = {
    cart: Product[];
    totalValue: number;
    totalQuantity: number;
    status: number;
    addItemToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
    removeProduct: (product: Product) => void;
};

export const CartContext = createContext({} as CartContextType);

const addProductToCart = (cartItems: Product[], productToAdd: Product) => {
    const existingProduct = cartItems.find(
        (product: Product) =>
            product._id === productToAdd._id &&
            product.color[0] === productToAdd.color[0] &&
            product.size[0] === productToAdd.size[0]
    );

    if (existingProduct) {
        return cartItems.map((product: Product) =>
            product._id === productToAdd._id &&
            product.color[0] === productToAdd.color[0] &&
            product.size[0] === productToAdd.size[0]
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

    return [
        ...cartItems,
        {
            ...productToAdd,
            quantity: productToAdd.quantity,
            color: productToAdd.color,
            size: productToAdd.size,
        },
    ];
};

const removeProductFromCart = (
    cartItems: Product[],
    productToRemove: Product
) => {
    const existingProduct = cartItems.find(
        (product: Product) =>
            product._id === productToRemove._id &&
            product.color[0] === productToRemove.color[0] &&
            product.size[0] === productToRemove.size[0]
    );

    if (existingProduct?.quantity === 1) {
        return cartItems.filter(
            (product: Product) => existingProduct !== product
        );
    }

    return cartItems.map((product: Product) =>
        product._id === productToRemove._id &&
        product.size[0] === productToRemove.size[0] &&
        product.color[0] === productToRemove.color[0]
            ? { ...product, quantity: product.quantity - 1 }
            : product
    );
};

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [totalValue, setTotalValue] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [status, setStatus] = useState(20);

    const router = useRouter();
    const path = router.pathname;

    useEffect(() => {
        setCart(JSON.parse(window.sessionStorage.getItem('cart') || '[]'));

        switch (path) {
            case '/cart':
                setStatus(20);
                break;
            case '/identification':
                setStatus(40);
                break;
            case '/payment':
                setStatus(60);
                break;
            case '/checkout':
                setStatus(80);
                break;
            case '/success':
                setStatus(100);
                break;
            default:
                setStatus(20);
        }
    }, []);

    const totalValueCart = () => {
        let total = 0;
        cart.map((event: Product) => {
            total += event.price * event.quantity;
        });
        setTotalValue(total);
    };

    const totalQuantityCart = () => {
        let total = 0;
        cart.map((event: Product) => {
            total += event.quantity;
        });
        setTotalQuantity(total);
    };

    useEffect(() => {
        window.sessionStorage.setItem('cart', JSON.stringify(cart));

        totalValueCart();
        totalQuantityCart();
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

    const removeProduct = (productToRemove: Product) => {
        const existingProduct = cart.find(
            (product: Product) =>
                product._id === productToRemove._id &&
                product.size[0] === productToRemove.size[0] &&
                product.color[0] === productToRemove.color[0]
        );
        if (existingProduct) {
            setCart(cart.filter((product) => existingProduct !== product));
        }
    };

    const clearCart = () => {
        sessionStorage.removeItem('cart');
        setCart([]);
        location.href = '/';
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                totalValue,
                totalQuantity,
                status,
                addItemToCart,
                removeFromCart,
                clearCart,
                removeProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
