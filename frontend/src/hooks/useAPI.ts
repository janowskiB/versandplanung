import {useEffect, useState} from 'react';
import axios from 'axios';
import {Customer} from "../types/Customer";
import {Employee} from "../types/Employee";
import {Fleet} from "../types/Fleet";

export default function useAPI() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [fleets, setFleets] = useState<Fleet[]>([]);

    useEffect(() => {
        getCustomers();
        getEmployees();
        getFleets();
    }, []);

    const getCustomers = () => {
        axios.get("/api/customers")
            .then(response => response.data)
            .then(customers => setCustomers(customers));
    }

    const getEmployees = () => {
        axios.get("/api/employees")
            .then(response => response.data)
            .then(employees => setEmployees(employees));
    }

    const getFleets = () => {
        axios.get("/api/fleets")
            .then(response => response.data)
            .then(fleets => setFleets(fleets));
    }

    return {customers, employees, fleets};
}