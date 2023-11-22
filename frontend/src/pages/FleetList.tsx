import useAPI from "../hooks/useAPI";

export default function FleetList() {
    const {fleets} = useAPI();

    return (
        <>
            <h2>Fleet List</h2>
            <ul>
                {fleets.map((fleet: any) => (
                    <li key={fleet.id}>{fleet.name} - {fleet.type} - {fleet.status}</li>
                ))}
            </ul>
        </>
    )
}