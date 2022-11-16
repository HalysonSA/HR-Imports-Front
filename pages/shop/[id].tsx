import IndividualProductPage from '../../components/Shop/individualPage';
import Layout from '../../components/Layout/Layout';
import api from '../../api/axios';

type Product = {
    props: {
        _id: string;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
        material: string;
        brand: string;
        size: [];
        color: [];
    };
};

const ProductPage = ({ props }: Product) => {
    return (
        <Layout>
            <IndividualProductPage product={props} />
        </Layout>
    );
};

ProductPage.getInitialProps = async (ctx: any) => {
    const { data } = await api.get(`/products/${ctx.query.id}`);
    return { props: data };
};

export default ProductPage;
