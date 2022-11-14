
import { createContext, useEffect, useState } from 'react';

type Customer = {
    first_name: string;
    last_name: string;
    email: string;
    cpf: string;
    street_name: string;
    street_number: string;
    city: string;
    complement: string;
    neighborhood: string;
    federal_unit: string;
    telephone: string;
    zip_code: string;
}

type CustomerContextData = {
    customer: Customer;
    clientSecret: string;
    handleCustomer: (customer: Customer) => void;
    handleClientSecret: (clientSecret: string) => void;
}

export const CustomerContext = createContext({} as CustomerContextData);

export function CustomerProvider({ children }:any) {
    const [customer, setCustomer] = useState<Customer>({} as Customer);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const customer = sessionStorage.getItem('customer');
        if (customer) {
            setCustomer(JSON.parse(customer));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('customer', JSON.stringify(customer));
    }, [customer]);

    const handleCustomer = (customer: Customer) => {
        setCustomer(customer);
    };

    const handleClientSecret = (clientSecret: string) => {
        setClientSecret(clientSecret);
    };

    return (
        <CustomerContext.Provider value={{ customer,clientSecret, handleCustomer, handleClientSecret }}>
            {children}
        </CustomerContext.Provider>
    );
}