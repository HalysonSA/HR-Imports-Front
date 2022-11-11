
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
    handleCustomer: (customer: Customer) => void;
}

export const CustomerContext = createContext({} as CustomerContextData);

export function CustomerProvider({ children }:any) {
    const [customer, setCustomer] = useState<Customer>({} as Customer);

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

    return (
        <CustomerContext.Provider value={{ customer, handleCustomer }}>
            {children}
        </CustomerContext.Provider>
    );
}