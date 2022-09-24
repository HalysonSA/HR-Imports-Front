import Dashboard from '../../components/Dashboard/menu';
import { useRouter } from 'next/router';
import ProductsTable from '../../components/Dashboard/tables/products/productsTable';

export default function AdminPage() {
    const router = useRouter();
    const param = router.query.id;

    param === 'sair' ? router.push('/') : null;

    function verifyParam() {
        if (param === 'produtos') {
            return <ProductsTable />;
        } else if (param === 'pedidos') {
            return <h1>Pedidos</h1>;
        } else if (param === 'dashboard') {
            return <h1>Dashboard</h1>;
        }
    }

    return <Dashboard>{verifyParam()}</Dashboard>;
}
