import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../components/api/axios';
import { setProducts } from '../components/Redux/ProductSlice';

const FetchProducts = async () => {
    const dispatch = useDispatch();

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
};

export default FetchProducts;
