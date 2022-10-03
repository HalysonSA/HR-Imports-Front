import { useRouter } from 'next/router';
import IndividualProductPage from '../../components/Shop/individualPage';
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';
import api from '../../api/axios';

type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    material: string;
    brand: string;
    size:[];
    color: string;
}

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState<Product>({ _id: '', title: '', description: '', price: 0, image: '', category: '', material: '', size: [], color: '', brand: '' });

    useEffect(() => {
        async function getProduct() {
            const { data } = await api.get(`/products/${id}`);
            setProduct(data);
        }
        getProduct();
    }, [id]);

    return (
        <Layout>
            <IndividualProductPage product={product} />
        </Layout>
    );
};
export default ProductPage;