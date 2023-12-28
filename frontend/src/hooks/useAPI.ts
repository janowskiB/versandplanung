import {useEffect, useState} from 'react';
import axios from 'axios';
import {Customer} from "../types/Customer";
import {Employee} from "../types/Employee";
import {Fleet} from "../types/Fleet";
import {Route} from "../types/Route";

export default function useAPI() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [fleets, setFleets] = useState<Fleet[]>([]);
    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        getEmployees();
        getCustomers();
        getFleets();
        getRoutes();
    }, []);

    const getEmployees = () => {
        axios.get("http://localhost:8080/api/employees")
            .then(response => response.data)
            .then(employees => setEmployees(employees));
    }

    const getCustomers = () => {
        axios.get("http://localhost:8080/api/customers")
            .then(response => response.data)
            .then(customers => setCustomers(customers));
    }

    const getFleets = () => {
        axios.get("http://localhost:8080/api/fleets")
            .then(response => response.data)
            .then(fleets => setFleets(fleets));
    }

    const getRoutes = () => {
        axios.get("http://localhost:8080/api/routes")
            .then(response => response.data)
            .then(routes => setRoutes(routes));
    }

    return {employees, customers, fleets, routes};
}