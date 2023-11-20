import useAPI from "../hooks/useAPI";

export default function EmployeeList() {
    const {employees} = useAPI()

    return (
        <>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>{employee.firstname} - {employee.lastname} - {employee.type}</li>
                ))}
            </ul>
        </>
    )
}