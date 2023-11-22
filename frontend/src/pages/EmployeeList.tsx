import useAPI from "../hooks/useAPI";

export default function EmployeeList() {
    const {employees} = useAPI()

    const handleDate = (date: string) => {
        const dateObj = new Date(date)
        return dateObj.toLocaleDateString(
            "de-DE",
            {day: "2-digit", month: "2-digit", year: "numeric"}
        )
    }

    return (
        <>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>{employee.firstname} {employee.lastname} - {handleDate(employee.birthdate)} - {employee.position}</li>
                ))}
            </ul>
        </>
    )
}