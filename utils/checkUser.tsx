import { setCookie } from 'nookies';
import api from '../api/axios';

type ResponseUserType = {
    data: {
        user: {
            name: string;
            email: string;
            phone?: string;
        };
        token: string;
    };
};

type UserType = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
};

const GetUser = async ({ email, password }: UserType) => {
    try {
        const response: ResponseUserType = await api.patch('/users', {
            email,
            password,
        });
        const user = response.data.user;
        const token = response.data.token;

        setCookie(null, 'HRtoken', token, {
            maxAge: 60 * 60 * 24, // 1 day
        });

        return user;
    } catch (error) {
        console.log(error);
    }
};
export default GetUser;
