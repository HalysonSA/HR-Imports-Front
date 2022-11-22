import { setCookie } from 'nookies';
import api from '../components/api/axios';

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

export const GetUser = async ({ email, password }: UserType) => {
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

export const checkUserExists = async (email: string | undefined) => {
    try {
        const response = await api.get(`/users/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
