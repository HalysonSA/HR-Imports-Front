import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../components/api/axios';
import { UserType } from '../components/Layout/Navbar/navbar';

const useOrdersSync = () => {
    const { data: session } = useSession();
    const user = useSelector((state: UserType) => state.user);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function FetchMyOrders() {
            const email = user.email;
            await api.patch(`/users/${email}`).then((response) => {
                setOrders(response.data);
            });
        }
        FetchMyOrders();
    }, [user, session]);

    return orders;
};
export default useOrdersSync;
