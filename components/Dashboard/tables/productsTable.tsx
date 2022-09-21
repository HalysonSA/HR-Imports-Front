import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/axios';
import { setProducts } from '../../Redux/ProductSlice';

type productInfo = {
    _id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    size: [];
};

type productDetails = {
    products: productInfo[];
};

const ProductsTable = () => {
    const dispatch = useDispatch();

    const products = useSelector((state: productDetails) => state.products);
    console.log(products);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/products');
                dispatch(setProducts(response.data));
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);

    return (
        //Usar table do chakra
        <div>
            TABELA DE PRODUTOS 
            {products.map((product: productInfo) => (
                <div key={product._id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.size}</p>
                </div>
            ))} 
           
        </div>
    );
};
export default ProductsTable;
