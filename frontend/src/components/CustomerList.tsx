import useAPI from "../hooks/useAPI";

export default function CustomerList() {
    const {customers} = useAPI()

    return (
        <>
        <h2>Customer List</h2>
        <ul>
            {customers.map((customer) => (
                <li key={customer.id}>{customer.firstname} - {customer.lastname}</li>
            ))}
        </ul>
        </>
    );
}