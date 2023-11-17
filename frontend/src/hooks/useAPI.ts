import {useEffect, useState} from 'react';
import axios from 'axios';
import {Customer} from "../types/Customer";

export default function useAPI() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = () => {
        axios.get("/api/customers")
            .then(response => response.data)
            .then(customers => setCustomers(customers));
    }

    return {customers, getCustomers};
}